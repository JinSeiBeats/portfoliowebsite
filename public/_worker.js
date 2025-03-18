// This is a Cloudflare Worker script that runs on the edge
// It can be used to customize how requests are handled

export default {
  async fetch(request, env, ctx) {
    // Get the URL from the request
    const url = new URL(request.url);
    
    // Pass through all requests to the Next.js application
    // This is a minimal worker that doesn't modify requests
    // You can add custom logic here if needed
    
    // Forward the request to the Next.js application
    return fetch(request);
  },
};
