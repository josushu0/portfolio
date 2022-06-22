import Navbar from './Navbar'
import styles from '../styles/Layout.module.scss'
import MobileNavbar from './MobileNavbar'
import { useState } from 'react'

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = (e) => {
    if (e.type === 'click' || e.keyCode === 13) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className={styles.div}>
      <Navbar toggleDrawer={toggleDrawer} isOpen={isOpen} />
      <MobileNavbar toggleDrawer={toggleDrawer} isOpen={isOpen} />
      <main className={styles.main}>{children}</main>
      <div className={styles.background}></div>
    </div>
  )
}

export default Layout
