// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

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
const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(sitemap).then(sm => {
  writeStream.end(sm);
});

links.forEach(link => sitemap.write(link));
sitemap.end();
