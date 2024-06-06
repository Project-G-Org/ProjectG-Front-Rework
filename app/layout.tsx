import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { Suspense } from 'react'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'ProjectG',
  description: 'De arquiteto para arquiteto',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Suspense fallback="carregando...">
          <Header />
        </Suspense>

        {children}
        <Footer />
      </body>
    </html>
  )
}
