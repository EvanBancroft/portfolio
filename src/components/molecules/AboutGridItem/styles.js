import { createUseStyles } from 'react-jss'

import { MQ, COLOR } from '@constants'

export const useStyles = createUseStyles({
  itemWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: (props) =>
      props.reverseMobile ? 'column-reverse' : 'column',
    margin: '50px 0',
    [MQ.TABLET]: {
      flexDirection: (props) => (props.reverse ? 'row-reverse' : 'row'),
    },
    [MQ.DESKTOP]: {
      alignItems: 'center',
    },
  },
  image: {
    width: '100%',
    [MQ.TABLET]: {
      width: '40%',
      marginLeft: (props) => (props.reverse ? 0 : '5%'),
      marginRight: (props) => (props.reverse ? '5%' : 0),
    },
  },
  textBlock: {
    margin: '0 10%',
    marginBottom: 50,
    [MQ.TABLET]: {
      width: '40%',
      margin: '0 4%',
    },
  },
  title: {
    fontFamily: 'neue-haas-grotesk-display, sans-serif',
    fontWeight: 700,
    color: COLOR.LIGHT_GREY,
    fontSize: 73,
    margin: 0,
    lineHeight: 1,
    marginTop: 50,
    marginBottom: 20,
    [MQ.TABLET]: {
      marginLeft: 0,
      fontSize: '7vw',
      paddingTop: 40,
    },
    [MQ.DESKTOP]: {
      marginBottom: 80,
    },
  },
  normalBody: {
    fontSize: 25,
    fontFamily: 'neue-haas-grotesk-display, sans-serif',
    fontWeight: 500,
    color: COLOR.LIGHT_GREY,
    [MQ.DESKTOP]: {
      fontSize: 30,
    },
    [MQ.DESKTOP_LARGE]: {
      fontSize: 40,
    },
  },
  skillsBody: {
    fontSize: 25,
    fontFamily: 'neue-haas-grotesk-display, sans-serif',
    fontWeight: 500,
    color: COLOR.LIGHT_GREY,
    [MQ.DESKTOP]: {
      fontSize: 30,
      margin: '20px 0',
    },
    [MQ.DESKTOP_LARGE]: {
      fontSize: 40,
    },
  },
  mailLink: {
    fontSize: 25,
    fontFamily: 'neue-haas-grotesk-display, sans-serif',
    fontWeight: 500,
    color: COLOR.LIGHT_GREY,
    textDecoration: 'none',
    display: 'inline-block',
    [MQ.DESKTOP]: {
      fontSize: 30,
      marginBottom: 20,
    },
    [MQ.DESKTOP_LARGE]: {
      fontSize: 40,
    },
  },
  skillsWrapper: {
    height: (props) => props.columnHeight,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
})
