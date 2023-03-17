import BottomBar from '@/components/BottomBar'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import { defaultTheme } from '@/styles'
import GlobalStyles from '@/styles/global'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ContextsLayout } from './contexts'

export function DefaultLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={defaultTheme}>
        <ContextsLayout>
          <Menu />
          <Navbar />
          {children}
          <Footer />
          <BottomBar />
        </ContextsLayout>
      </ThemeProvider>
    </>
  )
}
