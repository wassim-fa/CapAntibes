import { DefaultLayout } from '@/layouts'
import { AppProps } from 'next/app'
import React from 'react'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  )
}

export default App
