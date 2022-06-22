import Link from 'next/link'
import style from '../styles/Thanks.module.scss'

function Thanks() {
  return (
    <>
      <main className={style.main}>
        <div className={style.card}>
          <h1>Thanks for sending a message!</h1>
          <p>I&apos;ll come back to you as soon as I can</p>
          <Link href='/'>Return to home</Link>
        </div>
      </main>
    </>
  )
}

export default Thanks
