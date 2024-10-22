import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import localFont from 'next/font/local'
import { Footer } from './_components/ui/common/Footer'
import { Header } from './_components/ui/common/Header'
import './globals.css'

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <SessionProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </SessionProvider>
        </div>
      </body>
    </html>
  )
}
