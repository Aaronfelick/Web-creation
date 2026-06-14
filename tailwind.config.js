/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          950: '#07080f',
          900: '#0b1020',
          800: '#111936',
          700: '#162046',
        },
        electric: {
          orange: '#ff6a1a',
          ember: '#ff8f57',
          glow: '#ffb27d',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Syne', 'system-ui', 'sans-serif'],
        body: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'premium-canvas':
          'radial-gradient(900px 400px at 15% -10%, rgba(255,106,26,0.22), transparent 50%), radial-gradient(1000px 500px at 85% 0%, rgba(108,99,255,0.2), transparent 52%), linear-gradient(135deg, #07080f 0%, #0b1020 40%, #111936 100%)',
        'glass-sheen':
          'linear-gradient(140deg, rgba(255,255,255,0.22), rgba(255,255,255,0.08) 38%, rgba(255,255,255,0.02) 100%)',
        'cta-glow':
          'radial-gradient(circle at 30% 10%, rgba(255,106,26,0.35), rgba(255,106,26,0) 55%)',
      },
      boxShadow: {
        'glass-soft':
          '0 8px 32px rgba(4, 8, 24, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.14)',
        'glass-hover':
          '0 14px 40px rgba(4, 8, 24, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        'orange-glow':
          '0 0 0 1px rgba(255, 106, 26, 0.32), 0 0 30px rgba(255, 106, 26, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
        '4xl': '96px',
      },
      borderColor: {
        glass: 'rgba(255, 255, 255, 0.12)',
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ['responsive', 'hover', 'focus', 'group-hover'],
      textColor: ['hover', 'focus-visible'],
      borderColor: ['hover', 'focus-visible'],
      backgroundColor: ['hover', 'active'],
    },
  },
  plugins: [],
}
