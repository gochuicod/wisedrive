import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WiseDrive - Enterprise Solutions',
  description: 'Secure your automotive portfolio with AI-augmented inspections and fraud detection.',
  openGraph: {
    title: 'WiseDrive - Enterprise Solutions',
    description: 'Secure your automotive portfolio with AI-augmented inspections and fraud detection.',
    url: 'https://wisedrive.my/enterprise-solutions',
    siteName: 'WiseDrive',
    images: [
      {
        url: '/opengraph/b2b-opengraph.png',
        width: 1200,
        height: 630,
        alt: 'WiseDrive - Enterprise Solutions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WiseDrive - Enterprise Solutions',
    description: 'Secure your automotive portfolio with AI-augmented inspections and fraud detection.',
    images: ['/twitter-card/b2b-twitter-card.png'],
  },
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
