import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nguyendinhvan.blog',
  devToolbar: {
    enabled: false,
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true,
    },
  },
});
