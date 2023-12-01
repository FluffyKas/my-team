import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        my_team_coral: 'hsla(0, 87%, 73%, 1)',
        my_team_green_100: 'hsla(179, 41%, 63%, 1)',
        my_team_green_400: 'hsla(187, 41%, 29%, 1)',
        my_team_green_600: 'hsla(186, 97%, 17%, 1)',
        my_team_green_700: 'hsla(186, 100%, 14%, 1)',
        my_team_green_800: 'hsla(186, 97%, 10%, 1)',
        my_team_green_900: 'hsla(186, 100%, 8%, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
