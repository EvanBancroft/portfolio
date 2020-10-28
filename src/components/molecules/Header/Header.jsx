import React from 'react'
import { useStyles } from './styles'

export const Header = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.headerWrapper}>
      <div></div>
    </div>
  )
}
