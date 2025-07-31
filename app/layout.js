import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Fashion Club',
  description: 'Exclusive fashion club for style enthusiasts',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">

        <body>
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  )
}