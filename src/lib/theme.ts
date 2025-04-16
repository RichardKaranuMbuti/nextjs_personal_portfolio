// Theme configuration for TypeScript
export const theme = {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9', // Main primary color
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
        950: '#082f49',
      },
      secondary: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6', // Main secondary color
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
        950: '#2e1065',
      },
      neutral: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
        950: '#0a0a0a',
      },
      status: {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6',
      }
    },
    spacing: {
      container: '2rem',
      section: '6rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
    },
    transitions: {
      fast: '0.2s',
      medium: '0.3s',
      slow: '0.5s',
    }
  };
  
  // Typography styles for different headings and text elements
  export const typography = {
    fontFamily: {
      heading: 'var(--font-poppins)',
      body: 'var(--font-inter)',
      mono: 'var(--font-jetbrains-mono)',
    },
    fontSize: {
      display: ['4.5rem', { lineHeight: '1' }],
      h1: ['3rem', { lineHeight: '1.2' }],
      h2: ['2.25rem', { lineHeight: '1.3' }],
      h3: ['1.875rem', { lineHeight: '1.4' }],
      h4: ['1.5rem', { lineHeight: '1.5' }],
      h5: ['1.25rem', { lineHeight: '1.5' }],
      h6: ['1.125rem', { lineHeight: '1.5' }],
      body: ['1rem', { lineHeight: '1.5' }],
      small: ['0.875rem', { lineHeight: '1.5' }],
      xs: ['0.75rem', { lineHeight: '1.5' }],
    },
  };
  
  // Animation presets
  export const animations = {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
  };
  
  // Common breakpoints
  export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  };