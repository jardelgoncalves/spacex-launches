import { transitions } from './transitions'

export const motions = {
  short: `${transitions.duration[200]} ${transitions.timing['ease-in-out']}`,
  med: `${transitions.duration[500]} ${transitions.timing['ease-in-out']}`,
  long: `${transitions.duration[700]} ${transitions.timing['ease-in-out']}`,
} as const