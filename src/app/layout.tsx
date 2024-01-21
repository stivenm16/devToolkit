import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './Provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'devToolkit',
  description: 'devToolkit is a place to play games and learn new skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
