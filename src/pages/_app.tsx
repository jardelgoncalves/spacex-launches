import { Header } from 'components/ui/Header'
import type { AppProps } from 'next/app'
import { SettingsProvider } from 'providers/SettingsProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SettingsProvider>
      <Header />
      <Component {...pageProps} />
    </SettingsProvider>
  )
}

export default MyApp
