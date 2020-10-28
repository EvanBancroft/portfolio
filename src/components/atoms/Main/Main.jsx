import React from 'react'
import { useStyles } from './styles'

export const Main = ({ children }) => {
  const classes = useStyles()

  return (
    <main className={classes.main} role="main">
      {children}
    </main>
  )
}
