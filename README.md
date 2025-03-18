# Portfolio Website

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

### Local Development

For local development, use:

```bash
npm run dev
```

This will start the Next.js development server.

### Building for Production

To build the project for production:

```bash
npm run build
```

This will generate a static export in the `out` directory.

### Deploying to Cloudflare Pages

To deploy your application to Cloudflare Pages:

```bash
# First build the project
npm run build

# Then deploy to Cloudflare Pages
npm run pages:deploy
```

You'll need to authenticate with Cloudflare the first time you deploy:

```bash
npx wrangler login
```

### Cloudflare Pages Dashboard Deployment

Alternatively, you can deploy directly from the Cloudflare Pages dashboard:

1. Go to the Cloudflare Pages dashboard
2. Create a new project
3. Connect your GitHub repository
4. Set the build command to `npm run build`
5. Set the build output directory to `out`
6. Click "Save and Deploy"

### Adding to GitHub Repository

To add this project to a GitHub repository:

1. Initialize a Git repository (if not already done):
   ```bash
   git init
   ```

2. Add your files to Git:
   ```bash
   git add .
   ```

3. Commit your changes:
   ```bash
   git commit -m "Initial commit with portfolio website and Cloudflare Pages configuration"
   ```

4. Create a new repository on GitHub:
   - Go to [GitHub](https://github.com/) and sign in
   - Click on the "+" icon and select "New repository"
   - Enter a repository name (e.g., "portfolio-website")
   - Choose whether to make it public or private
   - Click "Create repository"

5. Connect your local repository to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
   git branch -M main
   git push -u origin main
   ```

6. Set up GitHub integration with Cloudflare Pages (optional):
   - In the Cloudflare Pages dashboard, connect to your GitHub repository
   - Configure automatic deployments on push to main branch
