import { createUseStyles } from 'react-jss'

import { COLOR, MQ } from '@constants'

export const useStyles = createUseStyles({
  worksWrapper: {
    [MQ.TABLET]: {
      margin: '0 5%',
    },
    [MQ.TABLET_LARGE]: {
      margin: '100px 7.3% 0 7.3%',
    },
  },
  header: {
    fontFamily: 'neue-haas-grotesk-display, sans-serif',
    fontWeight: 700,
    color: COLOR.LIGHT_GREY,
    fontSize: 73,
    margin: 0,
    lineHeight: 1,
    marginTop: 50,
    marginLeft: '9.6%',
    [MQ.TABLET]: {
      marginLeft: 0,
      fontSize: '7vw',
      paddingTop: 40,
    },
  },
  workGrid: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [MQ.TABLET]: {
      height: 600,
    },
    [`@media (min-width: 760px)`]: {
      height: 780,
    },
    [MQ.DESKTOP]: {
      height: 1150,
      marginTop: 100,
    },
    [MQ.DESKTOP_LARGE]: {
      height: 1500,
    },
    [MQ.DESKTOP_XL]: {
      height: 1900,
    },
  },
})
