import React from 'react'
import { Main, MasterContainer } from '@atoms'
import { Footer } from '@molecules'
import { Header } from '@molecules'

export const Layout = ({ children }) => {
  return (
    <MasterContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </MasterContainer>
  )
}
