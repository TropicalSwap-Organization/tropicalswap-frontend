import { DefaultSeoProps } from "next-seo";

export const SEO: DefaultSeoProps = {
  titleTemplate: "%s | TropicalSwap",
  defaultTitle: "TropicalSwap",
  description:
    "The most exotic AMM on Mantle Network! Trade, stake, and earn crypto in our ecosystem. Powered by $PAPPLE.",
  twitter: {
    cardType: "summary_large_image",
    handle: "@TropicalSwap",
    site: "@TropicalSwap",
  },
  openGraph: {
    title: "TropicalSwap - A next evolution DeFi exchange on Mantle (MNT)",
    description:
      "Earn MNT through yield farming, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by TropicalSwap), NFTs, and more, on a platform you can trust.",
    images: [{ url: "/favicon.ico" }],
  },
};
