# johncarmack.com — hosting infrastructure

Terraform for the static hosting of **johncarmack.com**: a private S3 bucket fronted
by CloudFront (Origin Access Control) with a DNS-validated ACM certificate. The site
itself is the Vite app in the repo root; `vite build` emits `dist/`, which is synced
to the bucket.

## What it manages

- `aws_s3_bucket.site` — private bucket (`johncarmack-com-site`); all public access
  blocked. Only CloudFront can read it.
- `aws_cloudfront_origin_access_control.site` + `aws_s3_bucket_policy.site` — the OAC
  grant; the bucket policy allows `s3:GetObject` only from this distribution.
- `aws_acm_certificate.site` (us-east-1) — covers `johncarmack.com` + `www.johncarmack.com`,
  DNS-validated. Validation records are written to the Route 53 zone here so the cert
  provisions in one apply.
- `aws_cloudfront_distribution.site` — fronts the bucket, redirect-to-https, compression,
  managed `CachingOptimized` policy, SPA fallback (403/404 → `/index.html`).

The **live** A/CNAME records (`johncarmack.com` → this distribution) stay in the
`dns` root of `my-infra-private`, which owns all hosted-zone records account-wide.
That repoint is the DNS cutover, done only after the distribution is verified.

## Usage

```sh
export AWS_PROFILE=newearth-admin   # account 735853783919
terraform init
terraform plan
terraform apply
```

State: `s3://john-carmack-terraform-state/johncarmack.com/terraform.tfstate`.

## Deploy the site

From the repo root (uses the Terraform outputs):

```sh
just deploy        # bun run build + s3 sync + CloudFront invalidation
```
