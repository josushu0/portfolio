import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'
import styles from '../styles/Navbar.module.scss'

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Link href='/'>
            <a className={styles.logo}>
              <Image src={ logo } width='40' height='40' alt='Logo' />
              <p>JOSUE MARTELL</p>
            </a>
          </Link>
        </div>
        <div className={styles.links}>
          <Link href='/'>Home</Link>
          <Link href='/projects'>Projects</Link>
          <Link href='/contact'>Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar