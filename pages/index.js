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
        <meta
          name='description'
          content='Josue Martell Front-end developer portfolio'
        />
      </Head>
      <div className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.greeting}>
            <h1>Hi there,</h1>
            <h2>
              My name is <span>Josué Martell</span>
            </h2>
            <h3>I&apos;m a Front-End Developer</h3>
            <div className={styles.actions}>
              <Link href='/contact'>See my work</Link>
              <Link href='/about'>More about me</Link>
            </div>
          </div>
          <div className={styles.avatar}>
            <Image
              src={avatar}
              alt='Avatar'
              width='400'
              height='400'
              priority
            />
          </div>
        </div>
      </div>
      <div className={styles.background}></div>
    </>
  )
}
