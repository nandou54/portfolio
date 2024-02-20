import styles from '@/styles/ProjectsSection.module.css'

import Project from '@/components/Project'
import Section from '@/components/Section'

import Icon from '@/components/Icon'
import { arrowIcon } from '@/constants/icons'
import getDictionary from 'i18n/server'

export default async function ProjectsSection({ id }) {
  const dictionary = await getDictionary(id)
  const skillsDictionary = await getDictionary('skills')

  const { title, list: projects } = dictionary
  const { list: skillsGroups } = skillsDictionary

  const allSkills = skillsGroups.reduce(
    (allSkills, skillGroup) => [...allSkills, ...skillGroup.list],
    []
  )

  const projectsPerYear = projects
    .reduce((acc, project) => {
      let yearObject = acc.find((yearObject) => yearObject.year === project.year)
      if (!yearObject) {
        yearObject = { year: project.year, projects: [] }
        acc.push(yearObject)
      }

      yearObject.projects.push({
        ...project,
        skills: project.skills.map((name) =>
          allSkills.find((skill) => skill.name === name)
        )
      })

      return acc
    }, [])
    .sort((a, b) => b.year - a.year)

  return (
    <Section id={id} className={styles.base}>
      <h2>{title}</h2>
      <div className={styles.timeline}>
        <Icon src={arrowIcon} foregroundColor />
      </div>
      <div className={styles.allProjects}>
        {projectsPerYear.map(({ year, projects }) => (
          <div key={year}>
            <h3>{year}</h3>
            <div className={styles.projects}>
              {projects.map((project, i) => (
                <Project key={i} {...project} allSkills={allSkills} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
