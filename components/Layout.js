import Navbar from './Navbar'
import styles from '../styles/Layout.module.scss'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout
