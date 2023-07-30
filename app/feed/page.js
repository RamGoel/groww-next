"use client"
import '@styles/feed.css'
import { postData, sidebarData } from '@utils/data'
import Image from 'next/image'
import PostCard from '@components/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getImagesApi } from '@services/api'
export default function Home() {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(true)
  const uiMode = useSelector(state => state.global.uiMode)
  const feedData = useSelector(state => state.global.feedData)


  const fetchData=()=>{
    setLoading(true)
    dispatch(getImagesApi(), () => setLoading(false))
  }
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    fetchData();
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);


  // useEffect(() => {
    
  // }, [])
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

          feedData && feedData.length
            ? feedData.map(post => {
              return <PostCard data={post} />
            })
            : <div className='feed_load_image'>
              <Image
                src={`https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif`}
                width={40}
                height={40}
                alt='loading-image'

              />
            </div>

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
