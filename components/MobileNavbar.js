import Link from 'next/link'
import { useRef } from 'react'
import style from '/styles/MobileNavbar.module.scss'

function MobileNavbar({ toggleDrawer, isOpen }) {
  return (
    <div
      className={style.container}
      style={
        isOpen ? { top: '0', opacity: '100%' } : { top: '-100%', opacity: '0' }
      }
    >
      <div className={style.drawer_icon}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
          width={32}
          height={32}
          onClick={toggleDrawer}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </div>
      <div className={style.links}>
        <Link href='/'>
          <a onClick={toggleDrawer}>Home</a>
        </Link>
        <Link href='/about'>
          <a onClick={toggleDrawer}>About</a>
        </Link>
        <Link href='/projects'>
          <a onClick={toggleDrawer}>Projects</a>
        </Link>
        <Link href='/contact'>
          <a onClick={toggleDrawer}>Contact</a>
        </Link>
      </div>
    </div>
  )
}

export default MobileNavbar
