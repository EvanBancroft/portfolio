import { createUseStyles } from 'react-jss'

import { MQ } from '@constants'

export const useStyles = createUseStyles({
  gridWrapper: {
    [MQ.TABLET]: {
      marginTop: 100,
    },
    [MQ.TABLET_LARGE]: {
      marginTop: 150,
    },
  },
})
