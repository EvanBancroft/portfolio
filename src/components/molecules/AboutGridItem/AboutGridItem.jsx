import React from 'react'
import { useStyles } from './styles'
import Img from 'gatsby-image'
import { useMeasure } from 'react-use'

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

  const chooseBody = () => {
    switch (type) {
      case 'normal': {
        return <p className={classes.normalBody}>{body}</p>
      }

      case 'skills': {
        return (
          <div className={classes.skillsWrapper}>
            {body.map((item, i) => {
              return (
                <p key={i} className={classes.skillsBody} ref={skill}>
                  {item}
                </p>
              )
            })}
          </div>
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
    <div className={classes.itemWrapper}>
      <Img fluid={fluid} className={classes.image} alt={alt} />
      <div className={classes.textBlock}>
        <h1 className={classes.title}>{title}</h1>
        {chooseBody()}
      </div>
    </div>
  )
}
