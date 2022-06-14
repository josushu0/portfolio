import Head from 'next/head'
import ProjectCard from '../components/ProjectCard'
import styles from '../styles/Projects.module.scss'
import ganttician from '../public/ganttician.screenshot.png'
import portfolio from '../public/portfolio-screenshot.png'

function Projects() {
  const projects = [
    {
      name: 'Ganttician',
      description: 'Project manager using Gantt charts.',
      photo: ganttician,
      github: 'https://github.com/josushu0/ganttician',
      live: 'https://ganttician.vercel.app/',
      tech: [
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg',
        'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg',
        'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
      ],
    },
    {
      name: 'Personal portfolio',
      description: 'My front-end developer portfolio.',
      photo: portfolio,
      github: 'https://github.com/josushu0/portfolio',
      live: 'https://josuemartell.vercel.app/',
      tech: [
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
        'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
      ],
    },
  ]
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
              key={projects.name}
              name={project.name}
              photo={project.photo}
              github={project.github}
              live={project.live}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </section>
      </div>
    </>
  )
}

export default Projects
