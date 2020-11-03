import { createUseStyles } from 'react-jss'

import { MQ } from '@constants'

export const useStyles = createUseStyles({
  masterContainer: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    [MQ.TABLET]: {
      margin: 'auto',
      maxWidth: 688,
    },
    [MQ.TABLET_LARGE]: {
      maxWidth: 917,
    },
    [MQ.DESKTOP]: {
      margin: ' ',
      maxWidth: 1095,
    },
    [MQ.DESKTOP_LARGE]: {
      maxWidth: 1720,
    },
    [MQ.DESKTOP_XL]: {
      maxWidth: 2293,
    },
    [MQ.DESKTOP_XXL]: {
      maxWidth: 3440,
    },
  },
})
