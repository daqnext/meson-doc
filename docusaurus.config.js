module.exports = {
  title: 'meson.network',
  tagline: 'the next generation distributed acceleration network.',
  url: 'https://meson.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'meson.network', // Usually your GitHub org/user name.
  projectName: 'mesonDoc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'meson.network',
      logo: {
        alt: 'meson.network',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/daqnext',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'User Guide',
              to: 'docs/',
            },
            // {
            //   label: 'White Paper',
            //   to: 'docs/White Paper',
            // },
          ],
        },
        {
          // <a href="https://t.me/mesonnetwork"><i class="fab fa-telegram"></i> </a>
          // <a href="https://discord.gg/z6YfSHDkmS"><i class="fab fa-discord"></i> </a>
          // <a href="https://github.com/daqnext"><i class="fab fa-github"></i> </a>
          // <a href="https://medium.com/meson-network"><i class="fab fa-medium-m"></i></a>
          // <a href="https://twitter.com/NetworkMeson"><i class="fab fa-twitter"></i></a>
          // <a href="mailto: admin@meson.network"><i class="fas fa-envelope"></i></a>
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/mesonnetwork',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/z6YfSHDkmS',
            },            
            {
              label: 'Medium',
              href: 'https://medium.com/meson-network',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/NetworkMeson',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://meson.network',
            },
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/daqnext',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} meson.network`,
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
            'https://github.com/daqnext/meson-doc/edit/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
