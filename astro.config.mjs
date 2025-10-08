import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://koreshalab.com',
  output: 'static',
  build: { format: 'directory' },
  integrations: [
    icon({
      iconDir: "src/assets/icons",
      include: {
        "solar": ["*"],
        "mdi": ["*"],
        "heroicons": ["*"]
      }
    })
  ],
});
