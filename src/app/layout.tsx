import { Metadata } from 'next'
import { siteMetadata } from './metadata'

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  metadataBase: new URL(siteMetadata.siteUrl),
  openGraph: {
    type: 'website',
    locale: siteMetadata.locale,
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    images: [{
      url: siteMetadata.logo,
      width: 1200,
      height: 630,
      alt: 'Elevate Brand 360 Logo'
    }],
  },
  other: {
    'google-site-verification': 'YOUR_GOOGLE_VERIFICATION_CODE', // Add this after getting it from Google Search Console
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": siteMetadata.siteUrl,
              "name": "Elevate Brand 360",
              "logo": siteMetadata.logo,
              "description": siteMetadata.description,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Howrah",
                "addressRegion": "West Bengal",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9163138456",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}