import styles from '@/styles/Skill.module.css'

import Icon from '@/components/Icon'
import OpenShowcase from '@/components/OpenShowcase'

export default async function Skill({
  size = 'medium',
  name,
  icon,
  props,
  showcaseProps
}) {
  return (
    <OpenShowcase images={[{ src: icon, alt: name, icon: true, props: showcaseProps }]}>
      <div className={styles.base}>
        <Icon
          className={styles.icon}
          type='secondary'
          border
          src={icon}
          title={name}
          {...props}
        />
        {size !== 'small' && <span>{name}</span>}
      </div>
    </OpenShowcase>
  )
}
