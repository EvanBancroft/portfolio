import React from 'react'

import { useStyles } from './styles'

export const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footerWrapper}>
      <div className={classes.copyrightWrapper}>
        <p>&#169; 2021 Evan Bancroft </p>
      </div>
      <div className={classes.socialWrapper}>
        <a
          href="https://github.com/EvanBancroft/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Site Repository
        </a>
        <a
          href="https://github.com/EvanBancroft"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/evan-bancroft-b37909154/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}
