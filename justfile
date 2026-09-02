set shell := ["bash", "-cu"]

# Build the production site into dist/.
build:
    bun install
    bun run build

# Manual publish. The deploy workflow (.github/workflows/deploy.yml) does this
# automatically on every push to main; this stays as a local fallback.
# Requires AWS_PROFILE=newearth-admin and `terraform -chdir=infra init` already run.
deploy: build
    aws s3 sync dist/ "s3://$(terraform -chdir=infra output -raw bucket)" --delete
    aws cloudfront create-invalidation \
        --distribution-id "$(terraform -chdir=infra output -raw distribution_id)" \
        --paths "/" "/index.html"

# One-time: create the GitHub Actions OIDC deploy role (infra/github-oidc.tf) and
# wire the two repo variables the deploy workflow reads. Needs AWS_PROFILE=newearth-admin
# and an authenticated gh CLI. Re-runnable; review the plan before approving.
setup-deploy:
    terraform -chdir=infra init
    terraform -chdir=infra apply
    gh variable set AWS_DEPLOY_ROLE_ARN --body "$(terraform -chdir=infra output -raw deploy_role_arn)"
    gh variable set DISTRIBUTION_ID --body "$(terraform -chdir=infra output -raw distribution_id)"
    @echo "Done. Push to main or run 'gh workflow run deploy.yml' to deploy."

# Show the CloudFront domain to verify against before the DNS cutover.
url:
    @terraform -chdir=infra output -raw distribution_domain_name
