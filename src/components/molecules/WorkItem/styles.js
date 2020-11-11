import { createUseStyles } from 'react-jss'

import { MQ, Z_INDEX } from '@constants'

export const useStyles = createUseStyles({
  columnBreaker: {
    [MQ.TABLET]: {
      width: 0,
      flexBasis: '100%',
    },
  },
  worksTile: {
    position: 'relative',
    width: '70%',
    marginTop: 50,
    border: 'none',
    outline: 'none',
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
    top: 80,
    left: 250,
    [MQ.TABLET]: {
      fontSize: 70,
    },
  },
  openModal: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    overflowY: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    left: 0,
    zIndex: Z_INDEX.MODAL_BACKGROUND,
  },
  modalImage: {
    width: '80%',
    margin: 'auto',
  },
  modalTitle: {
    color: 'white',
    fontFamily: 'neue-haas-grotesk-display, sans-serif',
    fontWeight: 700,
    fontSize: 30,
    marginTop: 80,
    textAlign: 'center',
  },
  modalInfo: {
    width: '80%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    '& h5': {
      textAlign: 'left',
      marginTop: 20,
      marginBottom: 15,
    },
    '& a': {
      fontSize: 20,
      fontFamily: 'neue-haas-grotesk-display, sans-serif',
      fontWeight: 500,
      textAlign: 'left',
      color: 'white',
      paddingBottom: 50,
    },
    '& p': {
      fontFamily: 'neue-haas-grotesk-display, sans-serif',
      fontWeight: 500,
      fontSize: 20,
      color: 'white',
      textAlign: 'left',
      margin: 0,
    },
  },

  closeButton: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: 'none',
    outline: 'none',
    position: 'absolute',
    right: '12%',
    marginTop: 20,
    zIndex: Z_INDEX.MODAL,
    '& img': {
      width: 45,
    },
  },
})
