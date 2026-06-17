# GitHub Actions deploy role for johncarmack1984/johncarmack.com (OIDC, no keys).
#
# Reuses the account's single GitHub OIDC provider (created by the public
# my-infra/github-oidc root), referenced here as a data source. Trust is pinned
# to this repo's main branch; the role may sync the site bucket and invalidate
# the distribution — nothing else. Applied once locally with admin creds
# (AWS_PROFILE=newearth-admin) via `just setup-deploy`; the deploy workflow then
# assumes it from CI. The workflow does NOT run Terraform, so co-locating this
# role with the resources it grants on (s3.tf / cdn.tf) is safe.

locals {
  github_repo = "johncarmack1984/johncarmack.com"
}

data "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"
}

data "aws_iam_policy_document" "deploy_trust" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [data.aws_iam_openid_connect_provider.github.arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    # Only the main branch (push or workflow_dispatch on main) may assume this.
    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:${local.github_repo}:ref:refs/heads/main"]
    }
  }
}

resource "aws_iam_role" "deploy" {
  name                 = "github-actions-johncarmack-com-deploy"
  description          = "Deploy role for GitHub Actions in ${local.github_repo} (OIDC): S3 site sync + CloudFront invalidation"
  assume_role_policy   = data.aws_iam_policy_document.deploy_trust.json
  max_session_duration = 3600
}

data "aws_iam_policy_document" "deploy" {
  statement {
    sid       = "ListSiteBucket"
    effect    = "Allow"
    actions   = ["s3:ListBucket"]
    resources = [aws_s3_bucket.site.arn]
  }

  statement {
    sid    = "WriteSiteObjects"
    effect = "Allow"
    actions = [
      "s3:GetObject",
      "s3:PutObject",
      "s3:DeleteObject",
    ]
    resources = ["${aws_s3_bucket.site.arn}/*"]
  }

  statement {
    sid       = "InvalidateDistribution"
    effect    = "Allow"
    actions   = ["cloudfront:CreateInvalidation"]
    resources = [aws_cloudfront_distribution.site.arn]
  }
}

resource "aws_iam_role_policy" "deploy" {
  name   = "site-deploy"
  role   = aws_iam_role.deploy.id
  policy = data.aws_iam_policy_document.deploy.json
}
