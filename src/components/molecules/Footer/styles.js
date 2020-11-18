import { createUseStyles } from 'react-jss'

import { MQ, COLOR } from '@constants'

export const useStyles = createUseStyles({
  footerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '50px 0',
    [MQ.TABLET]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '85%',
      margin: 'auto',
    },
  },
  copyrightWrapper: {
    fontFamily: 'neue-haas-grotesk-display, sans-serif',
    fontWeight: 400,
    fontSize: 20,
    color: COLOR.LIGHT_GREY,
  },
  socialWrapper: {
    '& a': {
      fontFamily: 'neue-haas-grotesk-display, sans-serif',
      fontWeight: 400,
      fontSize: 20,
      color: COLOR.LIGHT_GREY,
      marginLeft: 20,
      textDecoration: 'none',
    },
    '& a:first-child': {
      marginLeft: 20,
    },
  },
})
