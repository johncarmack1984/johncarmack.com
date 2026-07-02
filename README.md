# johncarmack.com

The source code for [johncarmack.com](https://johncarmack.com).

- Vite + React + TypeScript
- shadcn/ui
- Tailwind CSS v4
- Deployed to AWS S3 + CloudFront via GitHub Actions (OIDC, no static keys); infrastructure managed with Terraform

Prerendered (custom Vite SSR pass), PSI 100 on mobile, Person/ProfilePage JSON-LD for search and LLM answer engines.
