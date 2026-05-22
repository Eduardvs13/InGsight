export async function GET() {
  const PROJECT_ID = "8knpnv8f";
  const DATASET = "production";
  
  const query = `*[_type == "article" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }`;
  const url = `https://${PROJECT_ID}.api.sanity.io/v1/data/query/${DATASET}?query=${encodeURIComponent(query)}`;

  let articles = [];
  try {
    const res = await fetch(url);
    const json = await res.json();
    articles = json.result || [];
  } catch (err) {
    console.error("[InGsight] Error fetching articles for sitemap", err);
  }

  const siteUrl = "https://ingsight-web.vercel.app";

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;

  for (const article of articles) {
    xml += `
  <url>
    <loc>${siteUrl}/articles/${article.slug}</loc>
    <lastmod>${new Date(article._updatedAt || new Date()).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }

  xml += `\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
