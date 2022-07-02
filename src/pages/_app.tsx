import { Header } from 'components/ui/Header'
import { HeadSEO } from 'components/ui/HeadSEO'
import type { AppProps } from 'next/app'
import { SettingsProvider } from 'providers/SettingsProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SettingsProvider>
      <Header />
      <HeadSEO title={pageProps?.meta?.title} description={pageProps?.meta?.description} />
      <Component {...pageProps} />
    </SettingsProvider>
  )
}

export default MyApp
