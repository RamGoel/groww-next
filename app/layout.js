"use client"
import Header from '@components/Header'
import '@styles/globals.css'
import { Poppins } from 'next/font/google'
import { Providers } from '@redux/provider'
const poppy = Poppins({ weight: "500", subsets: ['latin'] })


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link
        rel="icon"
        href="/logo.png"
      />
      <title>{`SocialGram`}</title>
      <body className={poppy.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}


