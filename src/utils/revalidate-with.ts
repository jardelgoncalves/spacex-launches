export const revalidateWith = (timeSeconds: string) => {
  const transform = {
    's': (num: number) => num,
    'm': (num: number) => 60 * num,
    'h': (num: number) => 60 * 60 * num,
    'd': (num: number) => 60 * 60 * 24 * num,
  }

  const time = Number(timeSeconds.replace(/\D+/g, ''))
  const timeTo = timeSeconds.replace(/\d+/g, '') as 's' | 'm' | 'd' | 'h'

  return transform[timeTo] ? transform[timeTo](time): time
}