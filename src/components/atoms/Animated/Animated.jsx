import React, { useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import { useStyles } from './styles'
import PropTypes from 'prop-types'
import { useMedia } from 'react-use'

export const Animated = ({ children, type, start }) => {
  const classes = useStyles()
  const refs = useRef([])
  const isTablet = useMedia('(min-width: 768px)')
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    switch (type) {
      case 'fade-up': {
        ScrollTrigger.batch(refs.current, {
          interval: 0.1,
          onEnter: (batch) =>
            gsap.to(batch, 0.5, {
              opacity: 1,
              y: 0,
              stagger: 0.25,
              overwrite: true,
            }),
        })

        break
      }
      case 'fade-up-hero': {
        ScrollTrigger.batch(refs.current, {
          interval: 0.1,
          batchMax: 3,
          scrub: true,
          onEnter: (batch) =>
            gsap.to(batch, 0.5, {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              overwrite: true,
              delay: 0.5,
            }),
        })

        break
      }
      case 'fade-right': {
        ScrollTrigger.batch(refs.current, {
          interval: 0.1,
          batchMax: 3,
          start: isTablet ? '200px bottom' : '50px bottom',
          onEnter: (batch) =>
            gsap.to(batch, 0.5, {
              opacity: 1,
              x: 0,
              stagger: 0.25,
              overwrite: true,
            }),
        })
        break
      }
      case 'fade-left': {
        ScrollTrigger.batch(refs.current, {
          interval: 0.1,
          batchMax: 3,
          start: isTablet ? '200px bottom' : '50px bottom',
          onEnter: (batch) =>
            gsap.to(batch, 0.5, {
              opacity: 1,
              x: 0,
              stagger: 0.25,
              overwrite: true,
            }),
        })
        break
      }
      case 'fade-in': {
        ScrollTrigger.batch(refs.current, {
          interval: 0.1,
          batchMax: 5,
          onEnter: (batch) =>
            gsap.to(
              batch,
              1.5,
              {
                opacity: 1,
                stagger: 0.25,
                overwrite: true,
              },
              0.5
            ),
        })
        break
      }

      default:
        ScrollTrigger.batch(refs.current, {
          interval: 0.1,
          batchMax: 3,
          onEnter: (batch) =>
            gsap.to(batch, 0.5, {
              opacity: 1,
              y: 0,
              stagger: 0.25,
              overwrite: true,
            }),
        })
        break
    }
  })

  const chooseClass = () => {
    switch (type) {
      case 'fade-up': {
        return classes.fadeUp
      }
      case 'fade-right': {
        return classes.fadeRight
      }
      case 'fade-left': {
        return classes.fadeLeft
      }
      case 'fade-up-hero': {
        return classes.fadeUpHero
      }
      case 'parallax-text': {
        return classes.parallax
      }
      case 'parallax-image': {
        return classes.parallaxImage
      }
      case 'parallax-wrapper': {
        return classes.parallaxWrapper
      }
      case 'fade-in': {
        return classes.fadeIn
      }
      default:
        return classes.fadeUp
    }
  }
  return (
    <>
      {React.Children.map(children, (Child, i) => {
        return (
          <Child.type
            {...Child.props}
            ref={(element) => {
              refs.current[i] = element
            }}
            className={`${Child.props.className} ${chooseClass()}`}
          />
        )
      })}
    </>
  )
}

Animated.defaultProps = {
  type: 'fade-up',
}
Animated.propTypes = {
  type: PropTypes.string,
}
