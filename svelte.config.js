import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extends: './.svelte-kit/tsconfig.json',
  kit: {
    adapter: adapter(),
  },
};

export default config;