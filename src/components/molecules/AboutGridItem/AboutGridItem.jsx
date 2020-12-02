import React from 'react'
import { useStyles } from './styles'
import { useMeasure } from 'react-use'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import pdf from '@pdf/Evan-Bancroft-Resume.pdf'
import { Animated } from '@atoms'

export const AboutGridItem = ({
  title,
  body,
  fluid,
  alt,
  type,
  mail,
  number,
  reverse,
  reverseMobile,
}) => {
  const [skill, { height }] = useMeasure()
  const columnHeight = height * 5 + 250
  const classes = useStyles({ reverse, reverseMobile, columnHeight })
  const image = getImage(fluid)

  const chooseBody = () => {
    switch (type) {
      case 'normal': {
        return <p className={classes.normalBody}>{body}</p>
      }

      case 'skills': {
        return (
          <>
            <div className={classes.skillsWrapper}>
              {body.map((item, i) => {
                return (
                  <p key={i} className={classes.skillsBody} ref={skill}>
                    {item}
                  </p>
                )
              })}
            </div>
            <a
              href={pdf}
              className={classes.resumeLink}
              target="_blank"
              rel="noreferrer"
            >
              Evan Bancroft's Resume
            </a>
          </>
        )
      }

      case 'contact': {
        return (
          <>
            <a
              id="contact"
              href={`mailto:${mail}`}
              className={classes.mailLink}
            >
              {mail}
            </a>
            <p className={classes.normalBody}>{number}</p>
          </>
        )
      }

      default: {
        return <p className={classes.normalBody}>{body}</p>
      }
    }
  }
  return (
    <Animated type="fade-in">
      <div className={classes.itemWrapper}>
        <GatsbyImage image={image} className={classes.image} alt={alt} />
        <div className={classes.textBlock}>
          <h1 className={classes.title}>{title}</h1>
          {chooseBody()}
        </div>
      </div>
    </Animated>
  )
}
