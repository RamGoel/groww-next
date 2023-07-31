"use client"

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveUserData, saveUserImages } from '@redux/slices/globalSlice'
import { Api } from '@services/config'
import Loader from '@components/Loader'
import NotFound from '@components/NotFound'
import Image from 'next/image'
import '@styles/profile.css'
import { Check, Grid5, HambergerMenu, Message, ProfileAdd, ProfileTick } from 'iconsax-react'
import PostCard from '@components/PostCard'
import { Toaster, toast } from 'react-hot-toast'
import { saveToCache, getCachedData } from '@services/cache'
const page = ({ params }) => {
  const [isLoading, setLoading] = useState(false)
  const userData = useSelector(state => state.global.userData)
  const userImages = useSelector(state => state.global.userImages)
  const uiMode = useSelector(state => state.global.uiMode)
  const [isFollowed, setFollowed] = useState(false)
  const [isGrid, setGrid] = useState(true)
  const dispatch = useDispatch()


  const fetchUserProfile = () => {
    const dataFromCache = getCachedData('sociogram_profile')
    if (!dataFromCache || dataFromCache.username !== params.id) {
      toast.success("Fetching profile from server")
      setLoading(true)
      Api.get(`/users/${params.id}`).then(res => {
        dispatch(saveUserData(res.data))
        saveToCache(res.data, 'sociogram_profile')
        setFollowed(res.data.followed_by_user)
      }).catch(err => {
        setLoading(false)
        toast.err(err.response.data.errors[0])
      })
    } else {
      toast.success("Fetching profile from cache")
      dispatch(saveUserData(dataFromCache))
    }
  }


  const fetchUserImages = () => {
    const imageDataFromCache = getCachedData('sociogram_images')
    if (!imageDataFromCache || imageDataFromCache[0].user.username !== params.id) {
      // toast.success("Fetching images from server")
      Api.get(`/users/${params.id}/photos`).then(imagesRes => {
        setLoading(false)
        dispatch(saveUserImages(imagesRes.data))
        saveToCache(imagesRes.data, 'sociogram_images')
      }).catch(err => {
        setLoading(false)
        toast.error(err?.response?.data?.errors[0])
      })
    } else {
      // toast.success("Fetching images from cache")
      dispatch(saveUserImages(imageDataFromCache))
    }
  }
  useEffect(() => {
    fetchUserProfile()
    fetchUserImages()
  }, [])


  const followUser = () => {
    toast.success(`Followed ${userData.name}`)
    setFollowed(!isFollowed)
  }


  return (
    <div className={`profile_page ${uiMode}`}>
      <Toaster position='bottom-center' />
      {
        !isLoading
          ? (!userData || userData.length === 0)
            ? <NotFound type="User" />
            : <div className='profile_body'>
              <div className='profile_header'>
                <div className='profile_header_left'>
                  <Image
                    loading='lazy'
                    src={userData.profile_image.large}
                    width={100}
                    height={100}
                    alt='profile_image'
                    className='profile_header_image'
                  />
                  <div className='profile_header_text'>
                    <h3>{userData.name}</h3>
                    <h5>{userData.instagram_username ? `@${userData.instagram_username}` : ''}</h5>
                    <p>{userData?.bio?.substring(0, 235)}</p>
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

                    {
                      userData.tags.length && <>
                        <h4>Interests</h4>
                        <div className='profile_tags'>
                          {
                            userData.tags['custom'].map((tag) => {
                              return <p className='profile_tag_item'>{tag.title}</p>
                            })
                          }
                        </div>
                      </>
                    }


                    <div className='profile_action'>
                      <button disabled={isFollowed} style={{
                        opacity: isFollowed ? 0.6 : 1
                      }} onClick={() => followUser()}>
                        {isFollowed ? <ProfileTick /> : <ProfileAdd />}
                        {isFollowed ? `Followed ${userData.first_name}` : `Follow ${userData.first_name}`}
                      </button>
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
                <div className={`profile_images ${!isGrid ? 'make_list' : ''}`}>
                  {
                    userImages.map((image, index) => {
                      return isGrid ? <Image
                        src={image.urls.thumb}
                        width={70}
                        height={60}
                        alt={`posted_image${index}`}
                        className='profile_image_item'
                      /> : <PostCard data={image} />
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