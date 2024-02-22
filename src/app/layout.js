import { Inter } from 'next/font/google'
import './globals.css'

import { Navbar } from '@/shared/components/navbar/navbar';
import { Footer } from '@/shared/components/footer/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Next.js Starter App',
    template: "%s | Next.js Starter App",
  },
  description: "Next.js Starter App",
  image: "/og-image.jpg",
  type: "website",
  url: "https://nextjs-starter-app.vercel.app",
  site_name: "Next.js Starter App",
  locale: "en",
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