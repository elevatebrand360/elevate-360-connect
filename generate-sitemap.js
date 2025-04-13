const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/services/web-design', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/branding', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/social-media-marketing', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/product-shoot', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/corporate-video', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/app-development', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'yearly', priority: 0.5 },
];

const sitemap = new SitemapStream({ hostname: 'https://elevatebrand360.com' });
streamToPromise(sitemap).then(data => {
  createWriteStream('./public/sitemap.xml').end(data);
});
links.forEach(link => sitemap.write(link));
sitemap.end();
