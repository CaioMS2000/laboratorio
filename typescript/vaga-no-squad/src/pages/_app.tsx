import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { CreatingProvider } from '../context/creatingContext';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <CreatingProvider>
      <Component {...pageProps} />
    </CreatingProvider>
  )
}
