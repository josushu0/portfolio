import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.scss'
import photo from '../public/me.jpg'

function About() {
  const icon_size = 35

  return (
    <>
      <Head>
        <title>About | Josué Martell</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='About Me' />
      </Head>
      <div className={styles.main}>
        <Image
          className={styles.photo}
          src={photo}
          alt='Me'
          width={538}
          height={718}
          priority={true}
        />
        <div className={styles.section}>
          <h1>About Me</h1>
          <p>
            Hi! my name is Josué Martell, and I&apos;m a computer systems
            engeneering student at Tecnológico Nacional de Mexico Campus
            Querétaro. I&apos;m passionate about programming and making digital
            experiences easier and simpler for everyone. I&apos;m always
            searching to learn something new and expand my knowledge.
          </p>
          <p>
            In my free time, I like to play videogames (I&apos;m a big Nintendo
            Fan), watch anime, listen to music (and playing my favourite songs
            on the guitar or ukulele), spend time with friends and family,
            mountain biking and try out new technologies to build fun side
            projects.
          </p>
          <div>
            <h2>My Skills</h2>
            <ul className={styles.skills}>
              <li>
                <Image
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg'
                  alt='Vue'
                  width={icon_size}
                  height={icon_size}
                />
                Vue
              </li>
              <li>
                <Image
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
                  alt='React'
                  width={icon_size}
                  height={icon_size}
                />
                React
              </li>
              <li>
                <Image
                  src='https://cdn.worldvectorlogo.com/logos/next-js.svg'
                  alt='Nextjs'
                  width={icon_size}
                  height={icon_size}
                />
                Nextjs
              </li>
              <li>
                <Image
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg'
                  alt='Sass'
                  width={icon_size}
                  height={icon_size}
                />
                Sass
              </li>
              <li>
                <Image
                  src='https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
                  alt='Tailwind'
                  width={icon_size}
                  height={icon_size}
                />
                Tailwind
              </li>
              <li>
                <Image
                  src='https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg'
                  alt='Supabase'
                  width={icon_size}
                  height={icon_size}
                />
                Supabase
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
