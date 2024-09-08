// lib/cors.js
export function cors(req, res) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://project-blog-r6fwxav0o-chamodi-liyanages-projects.vercel.app"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
}
