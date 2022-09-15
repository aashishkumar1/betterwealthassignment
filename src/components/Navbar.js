import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div>Blog App</div>
        <div className={styles.insideNav}>
            <Link to='/' className={styles.home}>Home</Link>
            <Link to='addBlog' className={styles.newBlog}>New Blog</Link>
        </div>
    </nav>
  )
}

export default Navbar