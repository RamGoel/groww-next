"use client"
import Image from 'next/image'
import { Google } from 'iconsax-react'
import '@styles/home.css'
import { useSelector } from 'react-redux'
import { styles } from '@utils/styles'
import Link from 'next/link'
export default function Home() {
  const uiMode = useSelector(state => state.global.uiMode)
  return (
    <div className={`home_page ${uiMode}`}>
      <div className='home_left'>
        <h1>SocioGram</h1>
        <p>the ultimate <span>social media</span></p>
        <Link className='home_btn' href="/feed">
          Start Scrolling!
        </Link>
      </div>
      <div className='home_right'>
        <Image
          loading='lazy'
          width={450}
          height={400}
          src={`/home-${uiMode}.png`}
          alt='hero-image'
          className='home_image'
        />
      </div>
    </div>
  )
}
