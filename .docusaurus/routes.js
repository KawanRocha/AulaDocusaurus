import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/AulaDocusaurus/__docusaurus/debug',
    component: ComponentCreator('/AulaDocusaurus/__docusaurus/debug', '990'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/__docusaurus/debug/config',
    component: ComponentCreator('/AulaDocusaurus/__docusaurus/debug/config', 'ace'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/__docusaurus/debug/content',
    component: ComponentCreator('/AulaDocusaurus/__docusaurus/debug/content', '821'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/__docusaurus/debug/globalData',
    component: ComponentCreator('/AulaDocusaurus/__docusaurus/debug/globalData', '232'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/__docusaurus/debug/metadata',
    component: ComponentCreator('/AulaDocusaurus/__docusaurus/debug/metadata', 'e70'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/__docusaurus/debug/registry',
    component: ComponentCreator('/AulaDocusaurus/__docusaurus/debug/registry', '660'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/__docusaurus/debug/routes',
    component: ComponentCreator('/AulaDocusaurus/__docusaurus/debug/routes', '741'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/blog',
    component: ComponentCreator('/AulaDocusaurus/blog', '891'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/blog/archive',
    component: ComponentCreator('/AulaDocusaurus/blog/archive', '82f'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/blog/first-blog-post',
    component: ComponentCreator('/AulaDocusaurus/blog/first-blog-post', '0ac'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/blog/long-blog-post',
    component: ComponentCreator('/AulaDocusaurus/blog/long-blog-post', '29c'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/blog/mdx-blog-post',
    component: ComponentCreator('/AulaDocusaurus/blog/mdx-blog-post', '143'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/blog/tags',
    component: ComponentCreator('/AulaDocusaurus/blog/tags', '9f0'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/blog/tags/docusaurus',
    component: ComponentCreator('/AulaDocusaurus/blog/tags/docusaurus', 'b37'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/blog/tags/facebook',
    component: ComponentCreator('/AulaDocusaurus/blog/tags/facebook', '2c6'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/blog/tags/hello',
    component: ComponentCreator('/AulaDocusaurus/blog/tags/hello', 'f41'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/blog/tags/hola',
    component: ComponentCreator('/AulaDocusaurus/blog/tags/hola', '3ed'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/blog/welcome',
    component: ComponentCreator('/AulaDocusaurus/blog/welcome', '18b'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/markdown-page',
    component: ComponentCreator('/AulaDocusaurus/markdown-page', 'abb'),
    exact: true
  },
  {
    path: '/AulaDocusaurus/docs',
    component: ComponentCreator('/AulaDocusaurus/docs', '6e9'),
    routes: [
      {
        path: '/AulaDocusaurus/docs/category/tutorial---basics',
        component: ComponentCreator('/AulaDocusaurus/docs/category/tutorial---basics', '0a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AulaDocusaurus/docs/category/tutorial---extras',
        component: ComponentCreator('/AulaDocusaurus/docs/category/tutorial---extras', '3bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AulaDocusaurus/docs/intro',
        component: ComponentCreator('/AulaDocusaurus/docs/intro', 'b6d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AulaDocusaurus/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/AulaDocusaurus/docs/tutorial-basics/congratulations', '4d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AulaDocusaurus/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/AulaDocusaurus/docs/tutorial-basics/create-a-blog-post', 'c5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AulaDocusaurus/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/AulaDocusaurus/docs/tutorial-basics/create-a-document', '024'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AulaDocusaurus/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/AulaDocusaurus/docs/tutorial-basics/create-a-page', '512'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AulaDocusaurus/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/AulaDocusaurus/docs/tutorial-basics/deploy-your-site', 'd1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AulaDocusaurus/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/AulaDocusaurus/docs/tutorial-basics/markdown-features', '832'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AulaDocusaurus/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/AulaDocusaurus/docs/tutorial-extras/manage-docs-versions', '6d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/AulaDocusaurus/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/AulaDocusaurus/docs/tutorial-extras/translate-your-site', '6b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/AulaDocusaurus/',
    component: ComponentCreator('/AulaDocusaurus/', '1cb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
