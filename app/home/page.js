"use client"
import Image from 'next/image'
import { Google } from 'iconsax-react'
import '@styles/home.css'
import { useAppSelector } from '@redux/hooks'
export default function Home() {
  const uiMode = useAppSelector(state => state.global.uiMode)
  return (
    <div className='home_page'>
      <div className='home_left'>
        <h1 className=''>SocioGram</h1>
        <p className=''>the ultimate <span>social media</span></p>
        <button className=''>
          <Google />
          Login via Google
        </button>
      </div>
      <div className='home_right'>
        <Image
          src={`/home-${uiMode}.png`}
          alt='hero-image'
          width={450}
          height={400}
        />
      </div>
    </div>
  )
}
