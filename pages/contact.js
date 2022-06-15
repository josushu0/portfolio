import Head from 'next/head'
import styles from '../styles/Contact.module.scss'

function Contact() {
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const formData = {}
    Array.from(e.currentTarget).forEach((field) => {
      if (!field.name) return
      formData[field.name] = field.value
    })
    console.log(formData)
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
          <form className={styles.form} method='post' onSubmit={handleOnSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' />
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' />
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' cols='30' rows='5'></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
