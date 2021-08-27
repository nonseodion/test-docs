const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Nubian Docs',
  tagline: 'Welcome to the Nubian Docs',
  url: 'https://docs.nubian.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Nubian Docs',
      logo: {
        alt: 'Nubian Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Contracts',
        },
        {to: '/sdk', label: 'SDK', position: 'left'},
        {
          href: 'https://github.com/Open-Currency-Collective/Nubian-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Github',
          items: [
            {
              label: 'nubian-frontend',
              to: 'https://github.com/Open-Currency-Collective/nubian-frontend',
            },
            {
              label: 'nubian-dsa-connect',
              to: 'https://github.com/Open-Currency-Collective/nubian-dsa-connect',
            },
            {
              label: 'nubian-dsa-connectors',
              to: 'https://github.com/Open-Currency-Collective/nubian-dsa-connectors',
            },
            {
              label: 'CoreStaking',
              to: 'https://github.com/Open-Currency-Collective/CoreStaking',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Open-Currency-Collective/Nubian-docs',
          path: "protocol",
          routeBasePath: "protocol/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
