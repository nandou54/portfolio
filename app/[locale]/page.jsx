import styles from './page.module.css'

import BlockQuote from '#/components/BlockQuote'
import Footer from '#/components/Footer'

import GoToTopButton from '#/components/GoToTopButton'
import Navbar from '#/components/Navbar'
import Showcase from '#/components/Showcase'
import sections from '#/constants/sections'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { getDictionary } from 'dictionaries'

export default async function Page({ params: { locale } }) {
  const dictionary = await getDictionary(locale)

  return (
    <main className={styles.base} top='true'>
      <Navbar locale={locale} dictionary={dictionary} />
      {sections.map(({ id, Component }) => (
        <Component key={id} id={id} dictionary={dictionary[id]} />
      ))}
      <BlockQuote dictionary={dictionary.quote} />
      <Footer />
      <Showcase locale={locale} />
      <GoToTopButton />
      <SpeedInsights debug={false} />
      <Analytics debug={false} />
    </main>
  )
}
