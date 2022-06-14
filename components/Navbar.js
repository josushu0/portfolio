import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Link href='/'>
            <a className={styles.logo}>JOSUE MARTELL</a>
          </Link>
        </div>
        <div className={styles.links}>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/projects'>Projects</Link>
          <Link href='/contact'>Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
