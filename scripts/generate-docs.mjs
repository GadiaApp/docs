import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  input: ['./gadia-openapi.json'],
  output: './content/docs/api',
  includeDescription: true,
});
