import styles from '#/styles/Footer.module.css'

import Link from '#/components/Link'

export default function Footer() {
  return (
    <footer className={styles.base}>
      Source: <Link href='https://github.com/nanndo54'>GitHub</Link>
    </footer>
  )
}
