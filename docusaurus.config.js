// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Firedocs',
  tagline: 'Fiche de révision pour les sapeurs-pompiers',
  favicon: 'img/favicon.ico.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'http://firedocs.fr/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tacy-ops', // Usually your GitHub org/user name.
  projectName: 'firedocs-website', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The branch that GitHub pages will deploy from.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false, // Whether to add a trailing slash to URLs
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tacy-OPS/firedocs-website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tacy-OPS/firedocs-website/edit/main/blog/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Firedocs',
        logo: {
          alt: 'Firedocs Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: '/', label: 'Accueil', position: 'left' },
          {
            label: 'Secourisme',
            to: '/docs/suap',
            position: 'left',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            to: '/test-niveau',
            label: 'Test de niveau',
            position: 'right',
          },
          {
            href: 'https://github.com/tacy-OPS/tacy-ops.github.io/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        // Remplace par tes valeurs Algolia DocSearch
        appId: 'W22XRXWBG6',
        apiKey: '49490937020311d0df269920754f4479',
        indexName: 'Firedocs',
        // optionnel
        contextualSearch: true, // pour limiter la recherche au contexte courant
        searchParameters: {},
        // facultatif : placeholder de la barre de recherche
        placeholder: 'Recherche...',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Secourisme', to: '/docs/suap' },
            ],
          },
          {
            title: 'Réseaux sociaux',
            items: [
              { label: 'Instagram', href: 'https://instagram.com/firedocs' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/firedocs' },
              { label: 'X (Twitter)', href: 'https://x.com/firedocs' },
            ],
          },
          {
            title: 'Autres',
            items: [
              { label: 'Blog', to: 'blog' },
              { label: 'Test de niveau', to: 'test-niveau' },
              { label: 'Recueil de formation', to: 'https://vu.fr/recueil'}
            ],
          },
          {
            title: 'Légal',
            items: [
              { label: 'Mentions légales', to: 'mentions-legales' },
              { label: 'Conditions d\'utilisation', to: 'conditions-utilisation' },
              { label: 'Confidentialité', to: 'confidentialite' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Firedocs.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

};

export default config;
