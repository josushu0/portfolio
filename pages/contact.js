import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Contact.module.scss'

function Contact() {
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const formData = {}
    Array.from(e.currentTarget).forEach((field) => {
      if (!field.name) return
      formData[field.name] = field.value
    })

    fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
  }

  return (
    <>
      <Head>
        <title>Projects | Josué Martell</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Contact Me' />
      </Head>
      <div className={styles.main}>
        <h1>Get in contact!</h1>
        <div className={styles.contact}>
          <div className={styles.socials}>
            <Link href={'https://twitter.com/josushu0'}>
              <a target='_blank'>
                <Image
                  src={
                    'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg'
                  }
                  alt='Twitter'
                  width={40}
                  height={40}
                />
                <p>Twitter</p>
              </a>
            </Link>
            <Link href={'https://linkedin.com/in/josuemartell'}>
              <a target='_blank'>
                <Image
                  src={
                    'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg'
                  }
                  alt='Linkedin'
                  width={40}
                  height={40}
                />
                <p>Linkedin</p>
              </a>
            </Link>
            <Link href={'https://github.com/josushu0'}>
              <a target='_blank'>
                <Image
                  src={
                    'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
                  }
                  alt='Github'
                  width={40}
                  height={40}
                  className={styles.github}
                />
                <p>Github</p>
              </a>
            </Link>
          </div>
          <form className={styles.form} method='post' onSubmit={handleOnSubmit}>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Your name...'
            />
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your email...'
            />
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='5'
              placeholder='Your message...'
            ></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
