import React from 'react'
import { useStyles } from './styles'
import '@themes/global.css'

export const MasterContainer = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.masterContainer}>{children}</div>
}
