import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import ScrollToTop from 'react-scroll-to-top'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Quod Invicta | Homepage",
    template: "%s | Quod Invicta"
  },
  description: 'The Official Webpage for Quod Invicta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
      <div className="container">
          <Navbar/>
          {children}
          
          <Footer/>
      </div>
      
      </body>
    </html>
  )
}