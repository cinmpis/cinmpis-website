import { defineConfig } from 'astro/config';

const isPreview = process.env.CINMPIS_PREVIEW === 'true';
const [owner = 'cinmpis', repo = 'cinmpis-website'] = (process.env.GITHUB_REPOSITORY || 'cinmpis/cinmpis-website').split('/');

export default defineConfig({
  site: isPreview ? `https://${owner}.github.io` : 'https://www.cinmpis.it',
  base: isPreview ? `/${repo}` : '/',
  output: 'static',
  trailingSlash: 'always'
});
