import React, { useState } from 'react'
import { useStyles } from './styles'
import Img from 'gatsby-image'
import cn from 'classnames'
import { useLockBodyScroll } from 'react-use'
import { toUpper } from 'ramda'

import x from '@images/x.svg'

export const WorkItem = ({
  smallFluid,
  alt,
  title,
  siteLink,
  siteLinkPretty,
  siteCopy,
  color,
  isEvenMobile,
  fullTitle,
  i,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const classes = useStyles({ color })

  const worksTitleClasses = cn({
    [classes.worksTile]: true,
    [classes.worksTileEven]: isEvenMobile,
    [classes.worksTile2]: i === 1,
    [classes.worksTile3]: i === 2,
    [classes.worksTile4]: i === 3,
  })
  const modalClasses = cn({
    [classes.openModal]: isOpen,
  })

  useLockBodyScroll(isOpen)

  return (
    <>
      <button className={worksTitleClasses} onClick={() => setIsOpen(true)}>
        <h3 className={classes.title}>{title}</h3>
        <Img fluid={smallFluid} alt={alt} />
      </button>

      {isOpen && (
        <div className={modalClasses}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={classes.closeButton}
          >
            <img src={x} alt="Close Modal" />
          </button>

          <h4 className={classes.modalTitle}>{toUpper(fullTitle)} </h4>
          <Img fluid={smallFluid} alt={alt} className={classes.modalImage} />
          <div className={classes.infoWrapper}>
            <div className={classes.modalInfo}>
              <h5 className={classes.modalTitle}>ABOUT</h5>
              <p className={classes.aboutCopy}>{siteCopy}</p>
            </div>
            <div className={classes.modalInfo}>
              <h5 className={classes.modalTitle}>LIVE SITE</h5>
              <a href={siteLink}>{siteLinkPretty}</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
