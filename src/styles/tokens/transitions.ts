export const transitions = {
  timing: {
    linear: 'linear',
    'ease-in': 'cubic-bezier(.4,.7,.86,.57)',
    'ease-out': 'cubic-bezier(.4,.7,.86,.57)',
    'ease-in-out': 'cubic-bezier(.27,.57,.93,.65)',
  },
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
} as const