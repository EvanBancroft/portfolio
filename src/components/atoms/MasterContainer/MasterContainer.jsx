import React from 'react'
import { useStyles } from './styles'

export const MasterContainer = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.masterContainer}>{children}</div>
}
