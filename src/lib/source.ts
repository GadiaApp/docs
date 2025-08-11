import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { attachFile, createOpenAPI } from 'fumadocs-openapi/server';
import { icons } from 'lucide-react';
import { createElement } from 'react';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFile
  },
    icon(icon) {
        if (icon && icon in icons) return createElement(icons[icon as keyof typeof icons]);
    },
});

export const openapi = createOpenAPI();
