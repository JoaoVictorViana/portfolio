import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: 'rgb(5, 13, 26)',
        'navy-2': 'rgb(10, 25, 47)',
        'navy-3': 'rgb(17, 34, 64)',
        blue: 'rgb(59, 130, 246)',
        'blue-bright': 'rgb(96, 165, 250)',
        'blue-deep': 'rgb(29, 78, 216)',
        cyan: 'rgb(34, 211, 238)',
        text: 'rgb(148, 163, 184)',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}

export default config
