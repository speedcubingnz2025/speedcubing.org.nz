import adapter from '@sveltejs/adapter-static';

const config = {
  extends: './.svelte-kit/tsconfig.json',
  kit: {
    adapter: adapter(),
  },
};

export default config;
