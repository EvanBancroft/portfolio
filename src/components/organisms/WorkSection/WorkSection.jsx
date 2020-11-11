import React from 'react'
import { useStyles } from './styles'
import { useMedia } from 'react-use'

import { WorkItem } from '@molecules'

export const WorkSection = ({ data }) => {
  const classes = useStyles()
  const isMobile = useMedia('(max-width: 600px)')
  return (
    <div className={classes.worksWrapper}>
      <h2 className={classes.header}>work</h2>
      <div className={classes.workGrid}>
        {data.map((item, i) => {
          const isFourth = (i + 1) % 4 === 0
          const isEvenMobile = isMobile && (i + 1) % 2 === 0
          return (
            <WorkItem
              {...item}
              isEvenMobile={isEvenMobile}
              isFourth={isFourth}
              i={i}
              key={i}
            />
          )
        })}
      </div>
    </div>
  )
}
