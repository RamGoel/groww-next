"use client"

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveUserData, saveUserImages } from '@redux/slices/globalSlice'
import { Api } from '@services/config'
import Loader from '@components/Loader'
import NotFound from '@components/NotFound'
import Image from 'next/image'
import '@styles/profile.css'
import { Grid5, HambergerMenu, Message, ProfileAdd } from 'iconsax-react'
import PostCard from '@components/PostCard'
const page = ({ params }) => {
  const [isLoading, setLoading] = useState(false)
  const userData = useSelector(state => state.global.userData)
  const userImages = useSelector(state => state.global.userImages)
  const uiMode = useSelector(state => state.global.uiMode)
  const [isGrid, setGrid] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {

      setLoading(true)
      Api.get(`/users/${params.id}`).then(res => {
        console.log(res)
        dispatch(saveUserData(res.data))
        Api.get(`/users/${params.id}/photos`).then(imagesRes => {
          setLoading(false)
          console.log(imagesRes.data)
          dispatch(saveUserImages(imagesRes.data))
        })
      }).catch(err => {
        setLoading(false)
        console.log(err)
      })
    
  }, [])


  return (
    <div className={`profile_page ${uiMode}`}>
      {
        !isLoading
          ? (!userData || userData.length === 0)
            ? <NotFound />
            : <div className='profile_body'>
              <div className='profile_header'>
                <div className='profile_header_left'>
                  <Image
                    src={userData.profile_image.large}
                    width={100}
                    height={100}
                    alt='profile_image'
                    className='profile_header_image'
                  />
                  <div className='profile_header_text'>
                    <h3>{userData.name} {userData.instagram_username ? `@${userData.instagram_username}`:''}</h3>
                    <p>{userData.bio.substring(0,235)}</p>
                    <div className='profile_data'>
                      <div className='profile_data_item'>
                        <h4>{`Followers`}</h4>
                        <p>{userData.followers_count}</p>
                      </div>
                      <div className='profile_data_item'>
                        <h4>{`Likes`}</h4>
                        <p>{userData.total_likes}</p>
                      </div>
                      <div className='profile_data_item'>
                        <h4>{`Photos`}</h4>
                        <p>{userData.photos.length}</p>
                      </div>
                      <div className='profile_data_item'>
                        <h4>{`Downloads`}</h4>
                        <p>{userData.downloads}</p>
                      </div>
                    </div>
                    <h4>Interests</h4>
                    <div className='profile_tags'>
                      {
                        userData.tags['custom'].map((tag) => {
                          return <p className='profile_tag_item'>{tag.title}</p>
                        })
                      }
                    </div>

                    <div className='profile_action'>
                      <button><ProfileAdd />{userData.followed_by_user ? `Follow ${userData.first_name}` : `Unfollow ${userData.first_name}`}</button>
                      <button><Message />Message</button>
                    </div>
                  </div>
                </div>
                <div>

                </div>
              </div>

              <div className='profile_right'>
                <div className='profile_right_header'>
                  <Grid5 className={`${isGrid ? 'selected-tab' : ''}`} onClick={() => setGrid(true)} />
                  <HambergerMenu className={`${!isGrid ? 'selected-tab' : ''}`} onClick={() => setGrid(false)} />
                </div>
                <div className={`profile_images ${!isGrid?'make_list':''}`}>
                  {
                    userImages.map((image, index) => {
                      return isGrid ? <Image
                        src={image.urls.thumb}
                        width={70}
                        height={60}
                        alt={`posted_image${index}`}
                        className='profile_image_item'
                      /> : <PostCard data={image}/>
                    })
                  }
                </div>
              </div>
            </div>
          : <Loader />
      }

    </div>)
}

export default page