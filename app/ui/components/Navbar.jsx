import styles from '#/styles/Navbar.module.css'

import NavbarButtons from '#/components/NavbarButtons'
import NavbarLinks from '#/components/NavbarLinks'
import sections from '#/constants/section-ids'

export default async function Navbar({ locale, dictionary }) {
  const links = []

  for (const section of sections.filter(({ hideInNavbar }) => !hideInNavbar)) {
    const { id } = section
    const label = dictionary[id].title
    links.push({ id, label })
  }

  return (
    <nav className={styles.base}>
      <NavbarButtons locale={locale} />
      <NavbarLinks links={links} />
    </nav>
  )
}
