import Navbar from './Navbar'
import styles from '../styles/Layout.module.scss'

function Layout({ children }) {
  return (
    <div className={styles.div}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <div className={styles.background}></div>
    </div>
  )
}

export default Layout
