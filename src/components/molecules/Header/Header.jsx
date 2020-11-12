import React, { useState, useEffect } from 'react'
import { useStyles } from './styles'
import cn from 'classnames'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'

import logo from '@images/logo.svg'
import menu from '@images/menu.svg'
import { ROUTES } from '@constants'

export const Header = (props) => {
  const classes = useStyles(props)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const [active, setActive] = useState('/')
  const [activeHash, setActiveHash] = useState('/')

  useEffect(() => {
    location.pathname !== active && setActive(location.pathname)
    location.hash !== activeHash && setActiveHash(location.hash)
  }, [active, activeHash, location.hash, location.pathname])
  const circleClasses = cn({
    [classes.menu]: true,
    [classes.rotatedMenu]: isOpen,
    [classes.notRotatedMenu]: !isOpen,
  })
  const menuClasses = cn({
    [classes.menuHidden]: true,
    [classes.menuShowing]: isOpen,
  })
  const linkClasses1 = cn({
    [classes.linkHidden]: true,
    [classes.linkShowing]: isOpen,
    [classes.active]: active === ROUTES.HOME && activeHash !== ROUTES.WORK,
  })
  const linkClasses2 = cn({
    [classes.linkHidden]: true,
    [classes.linkShowing]: isOpen,
    [classes.active]: active === ROUTES.HOME && activeHash === ROUTES.WORK,
  })
  const linkClasses3 = cn({
    [classes.linkHidden]: true,
    [classes.linkShowing]: isOpen,
    [classes.active]: active === ROUTES.ABOUT && activeHash !== ROUTES.CONTACT,
  })
  const linkClasses4 = cn({
    [classes.active]: active === ROUTES.ABOUT && activeHash === ROUTES.CONTACT,
    [classes.linkHidden]: true,
    [classes.linkShowing]: isOpen,
  })

  return (
    <div className={classes.headerWrapper}>
      <Link to={ROUTES.HOME}>
        <img src={logo} alt="Evan Bancroft" className={classes.logo} />
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className={classes.button}>
        <img src={menu} alt="Menu" className={circleClasses} />
      </button>
      <div className={menuClasses}>
        <Link to={ROUTES.HOME} className={linkClasses1}>
          HOME
        </Link>
        <a href="/#work" className={linkClasses2}>
          WORK
        </a>
        <Link to={ROUTES.ABOUT} className={linkClasses3}>
          ABOUT
        </Link>
        <a href="/about#contact" className={linkClasses4}>
          CONTACT
        </a>
      </div>
    </div>
  )
}
