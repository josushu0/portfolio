import Head from 'next/head'
import styles from '../styles/About.module.scss'

function About() {
  return (
    <>
      <Head>
        <title>About | Josué Martell</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className={styles.page}>
        <div className={styles.background}></div>
      </div>
    </>
  )
}

export default About
