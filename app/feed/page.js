"use client"
import Image from 'next/image'
import { Google } from 'iconsax-react'
import '@styles/home.css'
import { useAppSelector } from '@redux/hooks'
export default function Home() {
  const uiMode = useAppSelector(state => state.global.uiMode)
  return (
    <div className='home_page'>
      
    </div>
  )
}
