import { createUseStyles } from 'react-jss'

import { MQ, Z_INDEX } from '@constants'

export const useStyles = createUseStyles({
  worksTile: {
    position: 'relative',
    width: '70%',
    marginTop: 50,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    padding: 0,
    [MQ.TABLET]: {
      width: '28%',
    },
  },
  worksTileEven: {
    alignSelf: 'flex-end',
    '& h3': {
      left: -45,
      top: 20,
    },
  },
  title: {
    margin: 0,
    color: (props) => props.color,
    position: 'absolute',
    zIndex: Z_INDEX.CONTENT,
    fontFamily: 'neue-haas-grotesk-display, sans-serif',
    fontWeight: 700,
    fontSize: 32,
    top: 65,
    left: '90%',
    [MQ.TABLET]: {
      fontSize: 40,
      top: '50%',
    },
    [MQ.DESKTOP]: {
      fontSize: 50,
    },
    [MQ.DESKTOP_LARGE]: {
      fontSize: 70,
    },
  },
  openModal: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    left: 0,
    zIndex: Z_INDEX.MODAL_BACKGROUND,
  },
  modalImage: {
    width: '80%',
    margin: 'auto',
    [MQ.TABLET]: {
      width: '70%',
    },
  },
  modalTitle: {
    color: 'white',
    fontFamily: 'neue-haas-grotesk-display, sans-serif',
    fontWeight: 700,
    fontSize: 30,
    marginTop: 80,
    textAlign: 'center',
    [MQ.TABLET]: {
      textAlign: 'left',
      marginLeft: '15%',
    },
    [MQ.DESKTOP]: {
      fontSize: 40,
    },
  },
  infoWrapper: {
    [MQ.TABLET]: {
      display: 'flex',
      marginLeft: '15%',
      marginBottom: 100,
      '& div:nth-child(2)': {
        marginLeft: '10%',
      },
    },
  },

  modalInfo: {
    width: '80%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    [MQ.TABLET]: {
      width: '40%',
      margin: 0,
    },
    '& h5': {
      textAlign: 'left',
      marginTop: 20,
      marginBottom: 15,
      [MQ.TABLET]: {
        marginLeft: 0,
      },
    },
    '& a': {
      fontSize: 20,
      fontFamily: 'neue-haas-grotesk-display, sans-serif',
      fontWeight: 500,
      textAlign: 'left',
      color: 'white',
      paddingBottom: 150,
      [MQ.DESKTOP]: {
        fontSize: 25,
      },
    },
    '& p': {
      fontFamily: 'neue-haas-grotesk-display, sans-serif',
      fontWeight: 500,
      fontSize: 20,
      color: 'white',
      textAlign: 'left',
      margin: 0,
      [MQ.DESKTOP]: {
        fontSize: 25,
      },
    },
  },

  closeButton: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    position: 'absolute',
    right: '12%',
    marginTop: 20,
    zIndex: Z_INDEX.MODAL,
    [MQ.TABLET]: {
      top: 77,
      right: '8%',
    },
    '& img': {
      width: 45,
      [MQ.DESKTOP]: {
        width: 65,
      },
    },
  },
  columnBreaker: {
    [MQ.TABLET]: {
      width: 0,
      flexBasis: '100%',
      pageBreakAfter: 'always',
    },
  },
  worksTile2: {
    [MQ.TABLET]: {
      marginTop: 100,
      marginLeft: '20%',
      '& h3': {
        left: '-15%',
      },
    },
    [MQ.DESKTOP]: {
      marginTop: 150,
    },
    [MQ.DESKTOP_LARGE]: {
      marginTop: 190,
    },
  },
  worksTile3: {
    [MQ.TABLET]: {
      marginTop: 100,
      marginLeft: '44%',
      '& h3': {
        left: '-20%',
        top: '30%',
      },
    },
    [MQ.DESKTOP]: {
      marginTop: 110,
    },
    [MQ.DESKTOP_LARGE]: {
      marginTop: 150,
    },
  },
  worksTile4: {
    [MQ.TABLET]: {
      marginTop: 100,
      marginLeft: '-5%',
      '& h3': {
        left: '-15%',
        top: '35%',
      },
    },
    [MQ.DESKTOP]: {
      marginTop: 150,
    },
    [MQ.DESKTOP_LARGE]: {
      marginTop: 200,
    },
  },
})
