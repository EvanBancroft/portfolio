import { createUseStyles } from 'react-jss'

import { MQ, Z_INDEX, COLOR } from '@constants'

export const useStyles = createUseStyles({
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '60px 10%',
    marginTop: 40,

    [MQ.TABLET]: {
      marginTop: 50,
      margin: '0 5%',
    },
    [MQ.TABLET_LARGE]: {
      margin: '50px 7.3% 0 7.3%',
    },
    [MQ.DESKTOP_LARGE]: {
      margin: '80px 7.3% 100px 7.3%',
    },
  },
  logo: {
    width: 42,
    [MQ.TABLET]: {
      width: 50,
    },
    [MQ.TABLET]: {
      width: 60,
    },
  },
  menu: {
    width: 40,
    zIndex: Z_INDEX.CONTENT,
    position: 'relative',

    [MQ.TABLET]: {
      width: 50,
    },
    [MQ.DESKTOP]: {
      width: 60,
    },
  },
  rotatedMenu: {
    transform: 'rotate(90deg)',
    transition: '0.3s',
  },
  notRotatedMenu: {
    transition: '0.3s',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: '0.3s',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    height: 40,
    padding: 0,
    [MQ.TABLET]: {
      height: 50,
    },
    [MQ.DESKTOP]: {
      height: 60,
    },
  },
  linkHidden: {
    opacity: 0,
  },
  linkShowing: {
    opacity: 1,
    transitionDelay: '0.1s',
  },
  menuHidden: {
    opacity: 0,
    height: 0,
    width: 0,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: Z_INDEX.CONTENT_BACKDROP,
    borderRadius: 50,
    backgroundColor: '#C5C6C6',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    transition: '0.2s',
    top: 40,
    cursor: 'default',
    right: '4%',
    [MQ.TABLET]: {
      right: '3%',
      top: 50,
    },
    [MQ.TABLET_LARGE]: {
      right: '6%',
    },

    [MQ.DESKTOP_LARGE]: {
      top: 80,
    },
    '& a': {
      margin: '15px 50px',
      fontFamily: 'neue-haas-grotesk-display, sans-serif',
      fontWeight: 700,
      color: 'black',
      textDecoration: 'none',
      fontSize: 30,
      [MQ.TABLET]: {
        fontSize: 40,
      },
      [MQ.DESKTOP]: {
        fontSize: 50,
      },
    },
    '& a:nth-child(4)': {
      marginBottom: 50,
    },
  },
  menuShowing: {
    opacity: 1,
    transition: '0.2s',
    borderRadius: 30,
    width: 300,
    height: 370,
    [MQ.TABLET]: {
      width: 400,
      height: 500,
    },
    [MQ.DESKTOP]: {
      width: 560,
      height: 650,
    },
  },
  active: {
    color: `${COLOR.ORANGE} !important`,
  },
})
