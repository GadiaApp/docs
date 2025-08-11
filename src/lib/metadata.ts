import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
    return {
        ...override,
        openGraph: {
            title: override.title ?? undefined,
            description: override.description ?? undefined,
            url: 'https://docs.gadia.org',
            images: '/banner.png',
            siteName: 'Gadia • Système de gestion de la vie-scolaire',
            ...override.openGraph,
        },
        twitter: {
            card: 'summary_large_image',
            creator: '@valbiongroup',
            title: override.title ?? undefined,
            description: override.description ?? undefined,
            images: '/banner.png',
            ...override.twitter,
        },
        alternates: {
            ...override.alternates,
        },
    };
}

export const baseUrl =
    process.env.NODE_ENV === 'development' ||
    !process.env.PRODUCTION_URL
        ? new URL('http://localhost:3000')
        : new URL(`https://${process.env.PRODUCTION_URL}`);