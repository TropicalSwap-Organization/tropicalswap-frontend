import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | TropicalSwap',
  defaultTitle: 'Blog | TropicalSwap',
  description:
    'The most exotic AMM on Mantle Network! Trade, stake, and earn crypto in our ecosystem. Powered by $PAPPLE.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@TropicalSwap',
    site: '@TropicalSwap',
  },
  openGraph: {
    title: 'TropicalSwap - A next evolution DeFi exchange on Mantle (MNT)',
    description:
      'The most exotic AMM on Mantle Network! Trade, stake, and earn crypto in our ecosystem. Powered by $PAPPLE. ',
    images: [{ url: '/images/logo.png' }],
  },
}
