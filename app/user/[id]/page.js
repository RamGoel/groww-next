"use client"

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveUserData } from '@redux/slices/globalSlice'
import { Api } from '@services/config'
import Loader from '@components/Loader'
import NotFound from '@components/NotFound'
import Image from 'next/image'

const page = ({ params }) => {
  const [isLoading, setLoading] = useState(true)
  const userData = useSelector(state => state.global.userData)
  const uiMode = useSelector(state => state.global.uiMode)
  const dispatch = useDispatch()
  useEffect(() => {
    setLoading(true)
    Api.get(`/users/${params.id}`).then(res => {
      setLoading(false)
      console.log(res)
      dispatch(saveUserData(res.data))
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
                    src={userData.profile_image.small}
                    width={100}
                    height={100}
                    alt='profile_image'
                    className='profile_header_image'
                  />
                  <div className='profile_header_text'>

                  </div>
                </div>
                <div>
                </div>
              </div>
              : <Loader />
      }
              {JSON.stringify(userData)}
            </div>
  )
}

      export default page