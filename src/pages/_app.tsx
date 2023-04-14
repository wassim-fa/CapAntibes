import { DefaultLayout } from '@/layouts'
import { AppProps } from 'next/app'
import React from 'react'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultLayout defaultLang={pageProps.language}>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  )
}

export default App
