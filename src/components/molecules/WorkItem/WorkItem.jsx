import React, { useState } from 'react'
import { useStyles } from './styles'
import cn from 'classnames'
import { toUpper } from 'ramda'
import { useMedia, useLockBodyScroll, useScrollbarWidth } from 'react-use'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import x from '@images/x.svg'
import { Animated } from '@atoms'

export const WorkItem = ({
  smallFluid,
  modalImg,
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
  const sbw = useScrollbarWidth()
  const isNotMobile = useMedia('(min-width: 1280px)')
  const small = getImage(smallFluid)
  const modal = getImage(smallFluid)

  const classes = useStyles({ color, sbw, isNotMobile, isOpen })

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

  useLockBodyScroll(isOpen && isNotMobile)

  return (
    <>
      <Animated>
        <button className={worksTitleClasses} onClick={() => setIsOpen(true)}>
          <h3 className={classes.title}>{title}</h3>
          <GatsbyImage image={small} alt={alt} />
        </button>
      </Animated>

      {isOpen && (
        <Animated>
          <div className={modalClasses}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={classes.closeButton}
            >
              <img src={x} alt="Close Modal" />
            </button>

            <h4 className={classes.modalTitle}>{toUpper(fullTitle)} </h4>
            <GatsbyImage
              image={modal}
              alt={alt}
              className={classes.modalImage}
            />
            <div className={classes.infoWrapper}>
              <div className={classes.modalInfo}>
                <h5 className={classes.modalTitle}>ABOUT</h5>
                <p className={classes.aboutCopy}>{siteCopy}</p>
              </div>
              <div className={classes.modalInfo}>
                <h5 className={classes.modalTitle}>LIVE SITE</h5>
                <a href={siteLink} target="_blank" rel="noreferrer">
                  {siteLinkPretty}
                </a>
              </div>
            </div>
          </div>
        </Animated>
      )}
    </>
  )
}
