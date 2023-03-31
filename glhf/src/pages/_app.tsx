import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (<Component {...pageProps} />)
}
