import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { plugin as markdownPlugin } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    solidPlugin(),
    markdownPlugin({
      mode: ['raw'],
    }),
  ],
});
