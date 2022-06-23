import Head from 'next/head'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'
import styles from '../styles/Projects.module.scss'
import projects from '../public/projects.json'

function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Josué Martell</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='My projects' />
      </Head>
      <div className={styles.main}>
        <h1>Projects</h1>
        <section className={styles.section}>
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              photo={project.photo}
              github={project.github}
              live={project.live}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </section>
        <div className={styles.button}>
          <Link href='/contact'>Get in touch</Link>
        </div>
      </div>
    </>
  )
}

export default Projects
