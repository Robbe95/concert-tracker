/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './modules/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{vue,js,ts,jsx,tsx}',
    './transitions/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@wisemen/vue-core/dist/**/*.{vue,js,ts,jsx,tsx}',
  ],
  plugins: [],
  theme: {
    extend: {
      animation: {
        'to-full-width': 'toFullWidth 5s linear',
      },

      borderRadius: {
        button: 'var(--radius-button)',
        card: 'var(--radius-card)',
        full: 'var(--radius-full)',
        input: 'var(--radius-input)',
        modal: 'var(--radius-modal)',
        popover: 'var(--radius-popover)',
      },

      boxShadow: {
        'DEFAULT': 'var(--shadow)',
        'button-hover-shadow': 'var(--shadow-button-hover);',
        'button-shadow': 'var(--shadow-button);',
        'card-hover-shadow': 'var(--shadow-card-hover);',
        'card-shadow': 'var(--shadow-card);',
        'input-shadow': 'var(--shadow-input)',
        'jobs-table-header-shadow': '0px 1px 2px 0px #1018280F, 0px 2px 3px 0px #1018281A',
        'modal-shadow': 'var(--shadow-modal);',
        'popover-shadow': 'var(--shadow-popover);',
        'table-header': '0px 2px 3px 0px #1018281A',
        'table-shadow': '0px 1px 2px 0px #1018280F',
      },

      colors: {
        accent: {
          DEFAULT: 'rgba(var(--accent), <alpha-value>)',
          foreground: 'rgba(var(--accent-foreground), <alpha-value>)',
        },
        background: 'rgba(var(--background), <alpha-value>)',
        black: 'rgba(var(--black), <alpha-value>)',

        border: 'rgba(var(--border), <alpha-value>)',
        card: {
          DEFAULT: 'rgba(var(--card), <alpha-value>)',
          foreground: 'rgba(var(--card-foreground), <alpha-value>)',
        },

        destructive: {
          DEFAULT: 'rgba(var(--destructive), <alpha-value>)',
          foreground: 'rgba(var(--destructive-foreground), <alpha-value>)',
        },
        foreground: 'rgba(var(--foreground), <alpha-value>)',

        input: {
          DEFAULT: 'rgba(var(--input), <alpha-value>)',
          border: 'rgba(var(--input-border), <alpha-value>)',
          disabled: 'rgba(var(--input-disabled), <alpha-value>)',
          foreground: 'rgba(var(--input-foreground), <alpha-value>)',
          placeholder: 'rgba(var(--input-placeholder), <alpha-value>)',
          ring: 'rgba(var(--input-ring), <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgba(var(--muted), <alpha-value>)',
          background: 'rgba(var(--muted-background), <alpha-value>)',
          foreground: 'rgba(var(--muted-foreground), <alpha-value>)',
        },
        neutral: {
          100: 'rgba(var(--neutral-100), <alpha-value>)',
          200: 'rgba(var(--neutral-200), <alpha-value>)',
          300: 'rgba(var(--neutral-300), <alpha-value>)',
          400: 'rgba(var(--neutral-400), <alpha-value>)',
          500: 'rgba(var(--neutral-500), <alpha-value>)',
          600: 'rgba(var(--neutral-600), <alpha-value>)',
          700: 'rgba(var(--neutral-700), <alpha-value>)',
          800: 'rgba(var(--neutral-800), <alpha-value>)',
          900: 'rgba(var(--neutral-900), <alpha-value>)',
        },
        popover: {
          DEFAULT: 'rgba(var(--popover), <alpha-value>)',
          foreground: 'rgba(var(--popover-foreground), <alpha-value>)',
        },
        primary: {
          DEFAULT: 'rgba(var(--primary), <alpha-value>)',
          foreground: 'rgba(var(--primary-foreground), <alpha-value>)',
        },
        ring: 'rgba(var(--ring), <alpha-value>)',
        secondary: {
          DEFAULT: 'rgba(var(--secondary), <alpha-value>)',
          foreground: 'rgba(var(--secondary-foreground), <alpha-value>)',
        },
        success: {
          DEFAULT: 'rgba(var(--success), <alpha-value>)',
          foreground: 'rgba(var(--success-foreground), <alpha-value>)',
        },
        transparent: 'transparent',

        warning: {
          DEFAULT: 'rgba(var(--warning), <alpha-value>)',
          foreground: 'rgba(var(--warning-foreground), <alpha-value>)',
        },

        white: 'rgba(var(--white), <alpha-value>)',
      },

      fontFamily: {
        mono: [
          'DM Mono',
        ],
        sans: [
          'DM Sans',
          'sans-serif',
        ],
      },

      fontSize: {
        body: [
          'var(--font-size-body)',
          {
            lineHeight: 'var(--font-line-height-body)',
          },
        ],
        caption: [
          'var(--font-size-caption)',
          {
            lineHeight: 'var(--font-line-height-caption)',
          },
        ],
        heading: [
          'var(--font-size-heading)',
          {
            lineHeight: 'var(--font-line-height-heading)',
          },
        ],
        hero: [
          'var(--font-size-hero)',
          {
            lineHeight: 'var(--font-line-height-hero)',
          },
        ],
        subtext: [
          'var(--font-size-subtext)',
          {
            lineHeight: 'var(--font-line-height-subtext)',
          },
        ],
        subtitle: [
          'var(--font-size-subtitle)',
          {
            lineHeight: 'var(--font-line-height-subtitle)',
          },
        ],
        title: [
          'var(--font-size-title)',
          {
            lineHeight: 'var(--font-line-height-title)',
          },
        ],
      },

      gridTemplateColumns: {
        'auth-layout': '1fr 1.75fr',
        'table-skeleton': '1fr 4fr 2fr 1fr',
      },

      keyframes: {
        toFullWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },

      maxWidth: {
        container: '70rem',
      },

      transitionTimingFunction: {
        'modal': 'cubic-bezier(0.22, 0.68, 0, 1.51)',
        'modal-overlay': 'cubic-bezier(0.17, 0.67, 0.16, 0.99)',
      },

      width: {
        modal: '28rem',
      },
    },
  },
}
