"use client"
import '@styles/feed.css'
import { useAppSelector } from '@redux/hooks'
import { Heart } from 'iconsax-react'
import { styles } from '@utils/styles'
import { postData, sidebarData } from '@utils/data'
import Image from 'next/image'
import PostCard from '@components/PostCard'
export default function Home() {
  const uiMode = useAppSelector(state => state.global.uiMode)
  return (
    <div className={`feed_page ${uiMode}`}>
      <div className='feed_box feed_left'>
        <div className='feed_left_list'>
          {
            sidebarData.map(item => {
              return <div>
                {item.icon(uiMode)}
                <p>{item.text}</p>
              </div>
            })
          }
        </div>
      </div>
      <div className='feed_box feed_mid'>
          {
            postData.map(post=><PostCard data={post} />)
          }
      </div>
      <div className='feed_box feed_right'>
        <div className='feed_right_box'>
          <Image
            src={`/profile.jpg`}
            height={100}
            alt='Profile Icon'
            width={100}
            className='feed_right_image'
          />

          <h3>Shreya Verma</h3>
          <p>@shreuva</p>
        </div>
      </div>
    </div>
  )
}
