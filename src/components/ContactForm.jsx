'use client'
import styles from '@/styles/ContactForm.module.css'

import Button from '@/components/Button'
import Hint from '@/components/Hint'
import Icon from '@/components/Icon'
import Input from '@/components/Input'
import { sendIcon } from '@/constants/icons'
import clsx from 'clsx/lite'
import useDictionary from 'i18n/client'
import { useState } from 'react'

export default function ContactForm({ children }) {
  const { form } = useDictionary('contact')
  const {
    emailLabel,
    nameLabel,
    nameDefault,
    subjectLabel,
    subjectPlaceholder,
    subjectDefault,
    messageLabel,
    messagePlaceholder,
    submitButton,
    requiredLabel,
    successMessage,
    successTooltip,
    error400Message,
    error500Message,
    errorMessage
  } = form

  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState()

  const handleChange = () => {
    setSuccess(false)
    setError()

    // const formData = new FormData(ev.target.form)
    // const formObject = Object.fromEntries(formData)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    setSending(true)
    setError()

    const formData = new FormData(ev.target)
    const formObject = Object.fromEntries(formData)
    formObject.name ||= nameDefault
    formObject.subject ||= subjectDefault

    fetch('/send-email', {
      method: 'POST',
      body: JSON.stringify(formObject)
    })
      .then((response) => {
        if (response.ok === false) throw response

        setSuccess(true)
      })
      .catch((error) => {
        const status = error.status
        setError(
          status === 400
            ? error400Message
            : status === 500
              ? error500Message
              : errorMessage
        )
      })
      .finally(() => {
        setSending(false)
      })
  }

  return (
    <form className={styles.base} onSubmit={handleSubmit} onChange={handleChange}>
      <header>
        {children}
        <b className={styles.requiredLabel}>{requiredLabel}</b>
      </header>
      <div className={clsx(styles.row, styles.row_3_2)}>
        <Input
          type='email'
          label={emailLabel}
          name='email'
          placeholder='keanureeves@company.com'
          required
          autoComplete='email'
        />
        <Input
          label={nameLabel}
          name='name'
          placeholder='Keanu Reeves'
          autoComplete='name'
        />
      </div>
      <Input label={subjectLabel} name='subject' placeholder={subjectPlaceholder} />
      <Input
        textarea
        label={messageLabel}
        name='message'
        placeholder={messagePlaceholder}
        required
      />
      <footer className={clsx((success || error) && styles.show)}>
        <p>{success ? successMessage : error}</p>
        <Hint position='bottom' label={successTooltip} hideAlways showAlways={success}>
          <Button type='submit' variant='primary' disabled={success} loading={sending}>
            {submitButton}
            <Icon src={sendIcon} backgroundColor />
          </Button>
        </Hint>
      </footer>
    </form>
  )
}
