import styles from '#/styles/Footer.module.css'

import Link from '#/components/Link'

function Footer() {
  return (
    <footer className={styles.base}>
      Source: <Link href='https://github.com/nanndo54'>GitHub</Link>
    </footer>
  )
}

export default Footer
