import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Dengun Agency & Developers",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://dad.dengun.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/dad/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Painatalman", // Usually your GitHub org/user name.
  projectName: "dad", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        blog: {
          path: "journal",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        theme: {
          customCss: "./src/css/custom.css"
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "AD",
      logo: {
        alt: "Dengun DAD logo",
        src: "img/logo.svg"
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs"
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Dengun",
          items: [
            {
              label: "Dengun's website",
              to: "https://www.dengun.com/"
            },
            {
              label: "GitLab",
              to: "https://gitlab.dengun.org/"
            },
            {
              label: "Zoho Projects",
              to: "https://projects.zoho.com/portal/dengun"
            },
            {
              label: "Zoho People",
              to: "https://people.zoho.com/dengun/zp"
            }
          ]
        },
        {
          title: "Archives",
          items: [
            {
              label: "Knowledge Base (v1, deprecated)",
              href: "https://gitlab.dengun.org/project/dick"
            },
            {
              label: "Knowledge Base (v2, deprecated)",
              href: "https://sites.google.com/dengun.com/playbook/dengun-knowledge-base"
            }
          ]
        }
      ],
      copyright: `© ${new Date().getFullYear()} All rights reserved`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
