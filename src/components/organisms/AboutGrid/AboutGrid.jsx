import React from 'react'
import { AboutGridItem } from '@molecules'
import { useStyles } from './styles'

export const AboutGrid = ({ data }) => {
  const classes = useStyles()
  return (
    <div className={classes.gridWrapper}>
      {data.map((item, i) => {
        return <AboutGridItem {...item} key={i} />
      })}
    </div>
  )
}
