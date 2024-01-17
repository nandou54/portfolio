import styles from '#/styles/ProjectsSection.module.css'
import { useMemo } from 'react'

import Icon from '#/components/Icon'
import Project from '#/components/Project'
import Section from '#/components/Section'
import Text from '#/components/Text'

import projects from '#/constants/projects'
import { arrowIcon } from '#/constants/icons'
import Link from '#/components/Link'

function ProjectsSection({ id }) {
  const projectsPerYear = useMemo(() => {
    return projects
      .reduce((acc, project) => {
        let yearObject = acc.find((yearObject) => yearObject.year === project.year)
        if (!yearObject) {
          yearObject = { year: project.year, projects: [] }
          acc.push(yearObject)
        }

        yearObject.projects.push(project)

        return acc
      }, [])
      .sort((a, b) => b.year - a.year)
  }, [])

  return (
    <Section id={id} className={styles.base}>
      <Link href={`#${id}`} className={styles.arrow} aria-label='Ver proyectos'>
        <Icon src={arrowIcon} />
      </Link>
      <Text as='h2' localeId='projects.title' />
      <div className={styles.content}>
        <div className={styles.timeline}>
          <Icon src={arrowIcon} />
        </div>
        <div className={styles.allProjects}>
          {projectsPerYear.map(({ year, projects }) => (
            <div key={year}>
              <Text as='h3'>{year}</Text>
              <div className={styles.projects}>
                {projects.map((project, i) => (
                  <Project key={i} {...project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ProjectsSection
