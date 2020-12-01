import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  fadeUp: {
    opacity: 0,
    transform: 'translateY(25px)',
  },
  fadeUpHero: {
    opacity: 0,
    width: '100%',
    transform: 'translateY(25px)',
  },
  fadeRight: {
    opacity: 0,
    transform: 'translateX(-25px)',
  },
  fadeLeft: {
    opacity: 0,
    transform: 'translateX(25px)',
  },
  fadeIn: {
    opacity: 0,
  },
  parallax: {
    width: '100%',
    WebkitTransformStyle: 'preserve-3d',
    WebkitBackfaceVisibility: 'hidden',
    opacity: 1,
  },
  parallaxImage: {
    width: '100%',
    WebkitTransformStyle: 'preserve-3d',
    WebkitBackfaceVisibility: 'hidden',
    opacity: 0,
    transform: 'translateY(25px)',
  },
  parallaxWrapper: {
    width: '100%',
  },
})
