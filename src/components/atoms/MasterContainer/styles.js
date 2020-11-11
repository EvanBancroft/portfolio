import { createUseStyles } from 'react-jss'

import { MQ } from '@constants'

export const useStyles = createUseStyles({
  masterContainer: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
  },
})
