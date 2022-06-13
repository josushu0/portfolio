import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import avatar from '../public/Avatar face.svg'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Josué Martell</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.greeting}>
            <p>Hi there,</p>
            <p>My name is Josué Martell</p>
            <p>I&apos;m a Front-End Developer</p>
            <div className={styles.actions}>
              <Link href='/contact'>See my work</Link>
              <Link href='/about'>More about me</Link>
            </div>
          </div>
          <div className={styles.avatar}>
            <Image src={avatar} alt='Avatar' />
          </div>
        </div>
      </div>
      <div className={styles.background}></div>
    </>
  )
}
