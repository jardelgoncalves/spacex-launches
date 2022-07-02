export const getYoutubeVideo = (url?: string) => {
  if (!url) return ""
  const re = /(youtube|youtu)/gi

  if (!re.test(url)) return ""
  const paths = url.split('/')

  return `https://youtube.com/embed/${paths[paths.length - 1]}`
}