// This adapter helps with Cloudflare Pages compatibility
export default function cloudflareAdapter() {
  // This is a minimal adapter for Cloudflare Pages
  // It doesn't need to do much as most of the work is handled by the Next.js standalone output
  return {
    name: 'cloudflare-pages-adapter',
    // This function runs during the build
    async build() {
      console.log('Using Cloudflare Pages adapter');
    },
  };
}
