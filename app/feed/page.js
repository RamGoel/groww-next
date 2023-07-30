"use client"
import '@styles/feed.css'
import { sidebarData } from '@utils/data'
import Image from 'next/image'
import PostCard from '@components/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { getImagesApi } from '@services/api'
import { saveFeedData } from '@redux/slices/globalSlice'
import Loader from '@components/Loader'
export default function Home() {
  const dispatch = useDispatch()
  const uiMode = useSelector(state => state.global.uiMode)
  const feedData = useSelector(state => state.global.feedData)
  const scrollerRef = useRef()

  const fetchData = () => {
    dispatch(getImagesApi())
  }
  const handleScroll = () => {
    if (scrollerRef.current.scrollTop - scrollerRef.current.scrollHeight - scrollerRef.current.clientHeight < 1) {
      dispatch(saveFeedData(feedData))
    }
  };

  useEffect(() => {
    scrollerRef.current.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    // fetchData()
  }, [])
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
      <div ref={scrollerRef} className='feed_box feed_mid'>


        {

          feedData && feedData.length
            ? feedData.map(post => {
              return <PostCard data={post} />
            })
            : <Loader />

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
