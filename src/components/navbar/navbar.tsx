import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navList}>
      <Link to="/">Home</Link>
      <Link to="/first">Contact Us</Link>
      </div>
    </div>
  )
}

export default Navbar
