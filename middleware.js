import { NextResponse } from 'next/server'

import { i18n } from './i18n/config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request) {
  const negotiatorHeaders = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const locales = i18n.locales

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)

  return matchLocale(languages, locales, i18n.defaultLocale)
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (!pathnameIsMissingLocale) return
  const locale = getLocale(request)

  return NextResponse.redirect(
    new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
  )
}

export const config = {
  matcher: ['/((?!api|static|_vercel|_next/static|_next/image|icon.svg).*)']
}
