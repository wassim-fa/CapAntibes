import { DefaultLayout } from '@/layouts'
import { AppProps } from 'next/app'
import React from 'react'

interface CustomPageProps extends AppProps {
  isApple: boolean
}
function App({ Component, isApple, pageProps }: CustomPageProps) {
  return (
    <>
      <DefaultLayout defaultLang={pageProps.language} isApple={isApple}>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  )
}

App.getInitialProps = async (ctx: any) => {
  const isApple = /Macintosh|MacIntel|MacPPC|Mac68K|iPhone|iPod/.test(
    ctx.ctx.req.headers['user-agent']
  )
  console.log(ctx.ctx.req.headers['user-agent'])
  console.log(`isApple: ${isApple}`)
  return { isApple }
}

export default App
