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
        <div className={styles.drawer}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
            width={28}
            height={28}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
          {/* <div>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/contact'>Contact</Link>
          </div> */}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
