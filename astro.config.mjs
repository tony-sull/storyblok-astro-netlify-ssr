import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify/functions'

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'W1vLyxT5rQ15jBpANjnv0gtt',
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
      },
    }),
    tailwind(),
  ],
  output: 'server',
  adapter: netlify(),
})
