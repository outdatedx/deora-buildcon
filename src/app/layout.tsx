import '~/css/global.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'

import Logo from '~/components/Logo'
import { Navbar } from '~/components/Navbar'
import hero from '~/public/static/hero.png'

import { AppHooks } from './app-hooks'
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: {
    default: 'next-typescript | SARGA(labs)©',
    template: '%s | SARGA(labs)©'
  },
  description: `A minimalist's boilerplate — Next.js with TypeScript.`,
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png'
    }
  ],
  manifest: '/manifest.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: 'next-typescript | SARGA(labs)©',
    creator: '@sargalabs',
    siteId: '@sargalabs'
  }
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body style={{ opacity: 0 }} className={inter.variable}>
        <div className="no-margin hero">
          <Image
            src={hero}
            alt="hero"
            className="no-margin"
            fill
            objectFit="cover"
            quality={100}
          />
        </div>
        <Navbar />
        <main>{children}</main>
        <footer>
          <Logo color="black" />
          <div className="copyright">
            <p>All rights reserved ® Deora Build Con</p>
            <p className="sarga">
              A Experimental Project By{' '}
              <a href="https://sargalabs.co?ref=deorabuildcon">SARGA(labs)©</a>
            </p>
          </div>
        </footer>
        <AppHooks />
      </body>
    </html>
  )
}

export default RootLayout
