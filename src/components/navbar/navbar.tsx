import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} to='/'></Link>
      <div className={styles.links}>
        <Link className={styles.navlinks} to="aboutUs">About Us</Link>
        <Link className={styles.navlinks} to="contactUs">Contact Us</Link>
      </div>
    </div>
  )
}

export default Navbar
