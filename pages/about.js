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
        <div className={styles.photo}>
          <Image src={photo} alt='Me' width={538} height={718} />
        </div>
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
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
                  alt='HTML5'
                  width={icon_size}
                  height={icon_size}
                />
                HTML5
              </li>
              <li>
                <Image
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
                  alt='CSS3'
                  width={icon_size}
                  height={icon_size}
                />
                CSS3
              </li>
              <li>
                <Image
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
                  alt='Javascript'
                  width={icon_size}
                  height={icon_size}
                />
                Javascript
              </li>
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
                  src='https://cdn.worldvectorlogo.com/logos/nextjs-2.svg'
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
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'
                  alt='Bootstrap'
                  width={icon_size}
                  height={icon_size}
                />
                Bootstrap
              </li>
              <li>
                <Image
                  src='https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg'
                  alt='Nextjs'
                  width={icon_size}
                  height={icon_size}
                />
                Bulma
              </li>
              <li>
                <Image
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg'
                  alt='MySQL'
                  width={icon_size}
                  height={icon_size}
                />
                MySQL
              </li>
              <li>
                <Image
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg'
                  alt='Postgresql'
                  width={icon_size}
                  height={icon_size}
                />
                Postgresql
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
              <li>
                <Image
                  src='https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
                  alt='Git'
                  width={icon_size}
                  height={icon_size}
                />
                Git
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
