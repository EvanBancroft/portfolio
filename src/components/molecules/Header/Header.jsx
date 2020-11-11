import React, { useState } from 'react'
import { useStyles } from './styles'
import cn from 'classnames'
import { Link } from 'gatsby'

import logo from '@images/logo.svg'
import menu from '@images/menu.svg'
import { ROUTES } from '@constants'

export const Header = (props) => {
  const classes = useStyles(props)
  const [isOpen, setIsOpen] = useState(false)
  const circleClasses = cn({
    [classes.menu]: true,
    [classes.rotatedMenu]: isOpen,
    [classes.notRotatedMenu]: !isOpen,
  })
  const menuClasses = cn({
    [classes.menuHidden]: true,
    [classes.menuShowing]: isOpen,
  })
  const linkClasses = cn({
    [classes.linkHidden]: true,
    [classes.linkShowing]: isOpen,
  })

  return (
    <div className={classes.headerWrapper}>
      <img src={logo} alt="Evan Bancroft" className={classes.logo} />
      <button onClick={() => setIsOpen(!isOpen)} className={classes.button}>
        <img src={menu} alt="Menu" className={circleClasses} />
      </button>
      <div className={menuClasses}>
        <Link to={ROUTES.HOME} className={linkClasses}>
          HOME
        </Link>
        <a href="/#work" className={linkClasses}>
          WORK
        </a>
        <Link to={ROUTES.ABOUT} className={linkClasses}>
          ABOUT
        </Link>
        <a href="/about#contact" className={linkClasses}>
          CONTACT
        </a>
      </div>
    </div>
  )
}
