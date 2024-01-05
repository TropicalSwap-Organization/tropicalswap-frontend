import { TranslateFunction } from "@pancakeswap/localization";
import { SalesSectionProps } from ".";

// export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
//   headingText: t('Trade anything. No registration, no hassle.'),
//   bodyText: t('Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.'),
//   reverse: false,
//   primaryButton: {
//     to: '/swap',
//     text: t('Trade Now'),
//     external: false,
//   },
//   secondaryButton: {
//     to: 'https://docs.pancakeswap.finance/',
//     text: t('Learn'),
//     external: true,
//   },
//   images: {
//     path: '/images/home/trade/',
//     attributes: [
//       { src: 'BNB', alt: t('BNB token') },
//       { src: 'BTC', alt: t('BTC token') },
//       { src: 'CAKE', alt: t('CAKE token') },
//     ],
//   },
// })

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: "Trade anything. No registration, no hassle.",
  bodyText:
    "Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.",
  reverse: false,
  primaryButton: {
    to: "/swap",
    text: "Trade Now",
    external: false,
  },
  secondaryButton: {
    to: "https://docs.tropicalswap.exchange/features/exchange",
    text: "Learn",
    external: true,
  },
  images: {
    path: "/images/home/trade/",
    attributes: [
      { src: "BNB", alt: "BNB token" },
      { src: "BTC", alt: "BTC token" },
      { src: "CAKE", alt: "CAKE token" },
    ],
  },
});

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: "Earn passive income with crypto.",
  bodyText: "PancakeSwap makes it easy to make your crypto work for you.",
  reverse: true,
  primaryButton: {
    to: "/farms",
    text: "Explore",
    external: false,
  },
  secondaryButton: {
    to: "https://docs.tropicalswap.exchange/features/yield-farming",
    text: "Learn",
    external: true,
  },
  images: {
    path: "/images/home/earn/",
    attributes: [
      { src: "pie", alt: "Pie chart" },
      { src: "stonks", alt: "Stocks chart" },
      { src: "folder", alt: "Folder with cake token" },
    ],
  },
});

// export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
//   headingText: t('CAKE makes our world go round.'),
//   bodyText: t(
//     'CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
//   ),
//   reverse: false,
//   primaryButton: {
//     to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56',
//     text: t('Buy CAKE'),
//     external: false,
//   },
//   secondaryButton: {
//     to: 'https://docs.pancakeswap.finance/tokenomics/cake',
//     text: t('Learn'),
//     external: true,
//   },

//   images: {
//     path: '/images/home/cake/',
//     attributes: [
//       { src: 'bottom-right', alt: t('Small 3d pancake') },
//       { src: 'top-right', alt: t('Small 3d pancake') },
//       { src: 'coin', alt: t('CAKE token') },
//       { src: 'top-left', alt: t('Small 3d pancake') },
//     ],
//   },
// })

export const cakeSectionData = (): SalesSectionProps => ({
  headingText: "CAKE makes our world go round.",
  bodyText:
    "CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!",
  reverse: false,
  primaryButton: {
    to: "/swap?outputCurrency=0xfcf5c02ca529081d65e40c3f770a2123c8300aa4&chainId=5001",
    text: "Buy $PAPPLE",
    external: false,
  },
  secondaryButton: {
    to: "https://docs.tropicalswap.exchange/tokenomics/pineapple-usdpapple",
    text: "Learn",
    external: true,
  },

  images: {
    path: "/images/home/cake/",
    attributes: [
      { src: "bottom-right", alt: "Small 3d pancake" },
      { src: "top-right", alt: "Small 3d pancake" },
      { src: "coin", alt: "CAKE token" },
      { src: "top-left", alt: "Small 3d pancake" },
    ],
  },
});
