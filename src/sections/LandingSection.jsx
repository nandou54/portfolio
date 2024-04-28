import styles from '@/styles/LandingSection.module.css'

import Avatar from '@/components/Avatar'
import ContactIcons from '@/components/ContactIcons'
import EmailButton from '@/components/EmailButton'
import Hint from '@/components/Hint'
import Icon from '@/components/Icon'
import Link from '@/components/Link'
import RichText from '@/components/RichText'
import Section from '@/components/Section'
import { downloadIcon } from '@/constants/icons'
import getDictionary, { getCurrentLocale } from 'i18n/server'

export default async function LandingSection({ id }) {
  const locale = await getCurrentLocale()
  const dictionary = await getDictionary()

  const { landing, aria } = dictionary
  const { name, presentation, cvButton, avatar, otherOptions } = landing

  return (
    <Section as='header' background={false} className={styles.base} id={id}>
      <div className={styles.info}>
        <div className={styles.title}>
          <h1>{name}</h1>
        </div>
        <RichText as='p' className={styles.presentation}>
          {presentation}
        </RichText>
        <div className={styles.buttons}>
          <EmailButton />
          <Hint position='bottom' label={aria.downloaded} showOnClick>
            <Link asButton variant='primary' href={`/${locale}/cv`} decoration={false}>
              {cvButton}
              <Icon src={downloadIcon} backgroundColor />
            </Link>
          </Hint>
        </div>
        <div className={styles.otherOptions}>
          <p>{otherOptions}</p>
          <ContactIcons className={styles.contact} />
        </div>
      </div>
      <Avatar className={styles.avatar} photo={avatar} />
    </Section>
  )
}
