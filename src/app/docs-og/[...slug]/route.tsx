import { generateOGImage } from 'fumadocs-ui/og';
import { source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { readFileSync } from 'node:fs';

const font = readFileSync('./app/docs-og/[...slug]/JetBrainsMono-Regular.ttf');
const fontBold = readFileSync('./app/docs-og/[...slug]/JetBrainsMono-Bold.ttf');

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: 'Gadia • Système de gestion de la vie-scolaire',
      fonts: [
          {
              name: 'Mono',
              data: font,
              weight: 400,
          },
          {
              name: 'Mono',
              data: fontBold,
              weight: 600,
          },
      ],
  });
}

export function generateStaticParams() {
  return source.generateParams().map((page) => ({
    ...page,
    slug: [...page.slug, 'image.png'],
  }));
}
