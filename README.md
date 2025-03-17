This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare Pages

This project is configured to deploy on [Cloudflare Pages](https://pages.cloudflare.com/) using Wrangler.

### Local Development with Wrangler

To run the development server with Wrangler:

```bash
# First build the project
npm run build

# Then run the local development server with Wrangler
npm run pages:dev
```

### Deploying to Cloudflare Pages

To deploy your application to Cloudflare Pages:

```bash
# First build the project
npm run build

# Then deploy to Cloudflare Pages
npm run pages:deploy
```

You'll need to authenticate with Cloudflare the first time you deploy. Follow the prompts in the terminal to log in and select your account and project.

For more information, check out the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/).
