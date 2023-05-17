import BottomBar from '@/components/BottomBar'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import { defaultTheme } from '@/styles'
import GlobalStyles from '@/styles/global'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ContextsLayout } from './contexts'
import Languages from '@/enums/languages'

export function DefaultLayout({
  defaultLang,
  children
}: {
  defaultLang: Languages
  children: React.ReactNode
}): JSX.Element {
  const [isApple, setIsApple] = useState(true)

  useEffect(() => {
    const userAgent = navigator.userAgent
    console.log(userAgent)
    setIsApple(/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent))
  }, [])

  return (
    <div className={isApple ? 'is-apple' : 'is-not-apple'}>
      <GlobalStyles />
      <ThemeProvider theme={defaultTheme}>
        <ContextsLayout defaultLang={defaultLang}>
          <Menu />
          <Navbar />
          {children}
          <Footer />
          <BottomBar />
        </ContextsLayout>
      </ThemeProvider>
    </div>
  )
}
