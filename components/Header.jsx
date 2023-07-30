"use client";

import { Login, Moon, Sun1 } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'
import '@styles/header.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeLoginStatus, changeUiMode } from '@redux/slices/globalSlice'
import { styles } from '@utils/styles';
import Link from 'next/link';
const Header = () => {
    const dispatch = useDispatch()
    const uiMode = useSelector(state => state.global.uiMode)
    const isLoggedin = useSelector(state => state.global.isLoggedin)
    return (
        <div className={`header_body ${uiMode}`} >
            <Link href="/" className='header_left'>
                <Image
                    src={`/logo.png`}
                    width={40}
                    height={40}
                    alt='App Logo'
                />
            </Link>
            {
                isLoggedin ? (
                    <div className='header_right'>
                        {
                            uiMode === 'dark'
                                ? <Sun1
                                    className='click_icon'
                                    color={styles[uiMode].text}
                                    enableBackground={true}
                                    onClick={() => {
                                        dispatch(changeUiMode())
                                    }} />
                                : <Moon
                                    className='click_icon'
                                    color={styles[uiMode].text}
                                    enableBackground={true}
                                    onClick={() => {
                                        dispatch(changeUiMode())
                                    }} />}
                        <Image
                            src={`/profile.jpg`}
                            width={40}
                            height={40}
                            alt='App Logo'
                            className='header_profile_image'
                        />
                    </div>
                ) : (
                    <>
                        <div className='header_right'>
                            <Login
                                size={40}
                                onClick={()=>{
                                    dispatch(changeLoginStatus())
                                }}
                                className='header_profile_image'
                            />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Header