import React from 'react'
import { useStyles } from './styles'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Animated } from '@atoms'

export const HomepageHero = ({ image }) => {
  const classes = useStyles()
  const imageData = getImage(image)

  return (
    <div className={classes.heroContainer}>
      <Animated type="fade-in">
        <div className={classes.textBlock}>
          <h1>
            evan
            <br />
            bancroft
          </h1>
          <div className={classes.line} />
          <h2>
            web developer <br /> content strategy
          </h2>
        </div>
      </Animated>
      <Animated type="fade-up-hero">
        <div className={classes.image}>
          <GatsbyImage image={imageData} alt="Evan Bancroft" />
        </div>
      </Animated>
    </div>
  )
}
