# johncarmack.com — hosting infrastructure

Terraform for the static hosting of **johncarmack.com**: a private S3 bucket fronted by CloudFront (Origin Access Control) with a DNS-validated ACM certificate. The site itself is the Vite app in the repo root; `vite build` emits `dist/`, which is synced to the bucket.

## What it manages

- `aws_s3_bucket.site` — private bucket (`johncarmack-com-site`); all public access blocked. Only CloudFront can read it.
- `aws_cloudfront_origin_access_control.site` + `aws_s3_bucket_policy.site` — the OAC grant; the bucket policy allows `s3:GetObject` only from this distribution.
- `aws_acm_certificate.site` (us-east-1) — covers `johncarmack.com` + `www.johncarmack.com`, DNS-validated. Validation records are written to the Route 53 zone here so the cert provisions in one apply.
- `aws_cloudfront_function.www_redirect` — viewer-request function (`www-redirect.js`) that 301s `www.johncarmack.com` to the apex, path and query string preserved, so search engines see one canonical host.
- `aws_cloudfront_distribution.site` — fronts the bucket, redirect-to-https, compression, managed `CachingOptimized` cache policy, managed `SecurityHeadersPolicy` response headers (HSTS, nosniff, frame-options, referrer-policy), the www redirect function, and real 404s: S3's 403/404 for a missing key become a 404 served from `/404.html` (the site has no client-side routes, so there is nothing to fall back to).
- `aws_iam_role.deploy` (`github-actions-johncarmack-com-deploy`) — the OIDC role the deploy workflow assumes; trust pinned to this repo's `main`, permissions scoped to S3 site sync + CloudFront invalidation. Reuses the account's shared GitHub OIDC provider (referenced as a `data` source, created by `my-infra/github-oidc`).

The **live** A/CNAME records (`johncarmack.com` → this distribution) stay in the `dns` root of `my-infra-private`, which owns all hosted-zone records account-wide. That repoint is the DNS cutover, done only after the distribution is verified.

## Usage

The deploy workflow does not run Terraform (`infra/**` is in its `paths-ignore`), so CloudFront changes are applied by hand after the matching site build is live:

```sh
export AWS_PROFILE=newearth-admin   # account 735853783919
terraform init
terraform plan
terraform apply
```

State: `s3://john-carmack-terraform-state/johncarmack.com/terraform.tfstate`.

## Deploy the site

Pushing to `main` deploys automatically: `.github/workflows/deploy.yml` builds the site and assumes the OIDC deploy role to sync S3 and invalidate CloudFront — no AWS keys in CI.

One-time wiring (creates the deploy role, then sets the `AWS_DEPLOY_ROLE_ARN` and `DISTRIBUTION_ID` repo variables the workflow reads):

```sh
export AWS_PROFILE=newearth-admin   # account 735853783919
just setup-deploy
```

Manual fallback — publish the local build straight from your machine:

```sh
just deploy        # bun run build + s3 sync + CloudFront invalidation
```
