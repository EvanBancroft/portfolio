import { createUseStyles } from 'react-jss'
import { MQ, COLOR } from '@constants'

export const useStyles = createUseStyles({
  heroContainer: {
    marginLeft: '9.6%',
    [MQ.TABLET]: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0 5%',
    },
    [MQ.TABLET_LARGE]: {
      margin: 0,
    },
  },
  textBlock: {
    '& h1': {
      fontFamily: 'neue-haas-grotesk-display, sans-serif',
      fontWeight: 700,
      color: COLOR.LIGHT_GREY,
      fontSize: 73,
      margin: 0,
      lineHeight: 1,
      [MQ.TABLET]: {
        fontSize: 57,
        paddingTop: 40,
      },
      [MQ.DESKTOP]: {
        fontSize: 90,
      },
      [MQ.DESKTOP_LARGE]: {
        fontSize: 135,
      },
    },
    '& h2': {
      fontFamily: 'neue-haas-grotesk-display, sans-serif',
      fontWeight: 600,
      color: COLOR.LIGHT_GREY,
      fontSize: 23,
      margin: 0,
      [MQ.DESKTOP]: {
        fontSize: 29,
      },
      [MQ.DESKTOP_LARGE]: {
        fontSize: 43,
      },
    },
  },
  line: {
    width: 40,
    height: 6,
    backgroundColor: COLOR.LIGHT_GREY,
    margin: '20px 0',
    [MQ.DESKTOP]: {
      width: 70,
      height: 11,
      margin: '40px 0',
    },
  },

  image: {
    marginTop: 25,
    [MQ.TABLET]: {
      width: '57%',
    },
    [MQ.TABLET_LARGE]: {
      width: '63%',
    },
    [MQ.DESKTOP_LARGE]: {
      width: '66%',
    },
  },
})
