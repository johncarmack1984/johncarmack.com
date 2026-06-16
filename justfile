set shell := ["bash", "-cu"]

# Build the production site into dist/.
build:
    bun install
    bun run build

# Build, then publish dist/ to S3 and invalidate the CloudFront cache.
# Requires AWS_PROFILE=newearth-admin and `terraform -chdir=infra init` already run.
deploy: build
    aws s3 sync dist/ "s3://$(terraform -chdir=infra output -raw bucket)" --delete
    aws cloudfront create-invalidation \
        --distribution-id "$(terraform -chdir=infra output -raw distribution_id)" \
        --paths "/*"

# Show the CloudFront domain to verify against before the DNS cutover.
url:
    @terraform -chdir=infra output -raw distribution_domain_name
