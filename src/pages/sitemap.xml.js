// pages/sitemap.xml.js

export const getServerSideProps = async ({ res }) => {
    const baseUrl = 'https://www.elevatebrand360.com';
  
    // List your site URLs here (manually or dynamically fetched)
    const staticPages = [
      '',
      '/about',
      '/services',
      '/contact',
      '/blog/best-marketing-agency-kolkata', // add your blog slug
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((page) => {
          return `
          <url>
            <loc>${baseUrl}${page}</loc>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `;
        })
        .join('')}
    </urlset>`;
  
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  };
  
  export default function Sitemap() {
    // getServerSideProps will handle the response
    return null;
  }
  