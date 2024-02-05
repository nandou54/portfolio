export const metadata = {
  metadataBase: 'https://nanndo54.dev/',
  title: 'Portfolio | nanndo54',
  alternates: {
    canonical: '/en',
    languages: {
      en: '/en',
      es: '/es'
    }
  },
  keywords: 'portfolio, full-stack, frontend, javascript, developer',
  appleWebApp: {
    statusBarStyle: '#7c7edf',
    title: 'Portfolio | nanndo54'
  }
}

export const viewport = {
  colorScheme: 'dark light',
  themeColor: '#7c7edf'
}

export default function RootLayout({ children }) {
  return children
}
