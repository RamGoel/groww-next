"use client"
import Header from '@components/Header'
import '@styles/globals.css'
import { Poppins } from 'next/font/google'
import wrapper from '@redux/store'
import { Providers } from '@redux/provider'
const poppy = Poppins({ weight: "500", subsets: ['latin'] })

export const metadata = {
  title: 'SocioGram',
  description: 'The one stop social media for developers',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link
        rel="icon"
        href="/logo.png"
      />
      <body className={poppy.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}


