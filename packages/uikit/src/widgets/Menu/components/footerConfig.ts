import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("About"),
    items: [
      {
        label: t("Business Contact"),
        href: "mailto:tropicalswap@gmail.com",
        isHighlighted: true,
      },
      {
        label: t("Whitepaper"),
        href: "https://docs.tropicalswap.exchange/",
      },
      {
        label: t("Zealy (fka Crew3)"),
        href: "https://zealy.io/c/tropicalswap/",
      },
      /*{
        label: t("Brand"),
        href: "https://docs.pancakeswap.finance/brand",
      },
      {
        label: t("Blog"),
        href: "https://medium.com/pancakeswap",
      },
      {
        label: t("Community"),
        href: "https://docs.pancakeswap.finance/contact-us/telegram",
      },*/
    ],
  },
  {
    label: t("Help"),
    items: [
      {
        label: t("Support"),
        href: "https://discord.gg/fy2588h62c",
      },
      {
        label: t("Guides"),
        href: "https://docs.tropicalswap.exchange/tropicalswap-intro/get-started",
      },
      {
        label: "Github",
        href: "",
      },
    ],
  },
  /*{
    label: t("Developers"),
    items: [

      {
        label: t("Documentation"),
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: t("Bug Bounty"),
        href: "https://docs.pancakeswap.finance/code/bug-bounty",
      },
      {
        label: t("Audits"),
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: t("Careers"),
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },*/
];
