export default {
  defaultTitle: "litxdev",
  description: `LitxDev's personal website`,
  additionalMetaTags: [
    {
      property: "keywords",
      content: "readme, easiest, create, markdown, git, github, gitlab",
    },
    {
      name: "theme_color",
      content: "#3B82F6",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://litxdev.vercel.app",
    title: "readme.so",
    description: `LitxDev's personal website`,
    images: [
      {
        url: "https://litxdev.vercel.app/assets/logo.svg",
        width: 375,
        height: 375,
        alt: "Logo",
      },
    ],
    site_name: "litxdev",
    imageWidth: 1200,
    imageHeight: 1200,
  },
  twitter: {
    handle: "@LitxDev",
    cardType: "summary",
  },
}
