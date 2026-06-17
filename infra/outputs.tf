output "bucket" {
  description = "Static-site bucket name (deploy target for `aws s3 sync`)."
  value       = aws_s3_bucket.site.bucket
}

output "distribution_id" {
  description = "CloudFront distribution ID (for cache invalidations)."
  value       = aws_cloudfront_distribution.site.id
}

output "distribution_domain_name" {
  description = "CloudFront domain — verify the site here before cutting over DNS."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "deploy_role_arn" {
  description = "Set as the AWS_DEPLOY_ROLE_ARN repo variable for the deploy workflow."
  value       = aws_iam_role.deploy.arn
}
