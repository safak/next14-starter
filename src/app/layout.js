import { Inter } from 'next/font/google'
import './globals.css'

import { Navbar } from '@/shared/components/navbar/navbar';
import { Footer } from '@/shared/components/footer/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="container">
        <Navbar />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  )
}