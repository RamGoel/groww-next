import Image from 'next/image'
import '@styles/postCard.css'
import { postFooterData } from '@utils/data'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { ArrowCircleDown2, ArrowDown, ArrowDown2, CopySuccess, Link1 } from 'iconsax-react'
import { Toaster, toast } from 'react-hot-toast'
import { useState } from 'react'
import NoImage from './NoImage'
const PostCard = ({
    data,
}) => {
    const uiMode = useSelector(state => state.global.uiMode)
    const [isCopied, setCopied]=useState(0)
    const copyLink = () => {
        if (isCopied === 0) {
            navigator.clipboard.writeText(data.links.html)
            toast.success("Copied to Clipboard")
            setCopied(1)
        } else if (isCopied === 1) {
            toast.success("Already Copied to Clipboard")
            setCopied(2)
        }
    }


    return (
        <div key={data.id}>
            <Toaster toastOptions={{
                style: {
                    opacity: (isCopied!==0) ? 1 : 0
                }
            }} position='bottom-center' />
            <div className='post_body' >
                <div className='post_header'>
                    <div className='post_header_left'>
                        <Link href={`/user/${data.user.username}`}>
                            <Image
                                loading='lazy'
                                src={`${data.user.profile_image.small}`}
                                width={50}
                                height={50}
                                alt="post-image"
                                className='post_icon'
                                style={{
                                    outline: `2px solid ${data.color || 'blue'}`,
                                    outlineOffset: 2
                                }}
                            />
                        </Link>
                        <div className='post_header_text'>
                            <h4>{data.user.username || "Shivam Verma"}</h4>
                            <p>{data.user.location || "Rishikesh, Uttrakhand"}</p>
                        </div>
                    </div>
                    <div className='post_header_right'>
                        <Link1  className='click_icon' onClick={() => copyLink()} />
                    </div>
                </div>
                {data?.description ? <div className='post_caption'>
                    <p>{data.description}</p>
                </div> : null}
                {data?.urls?.small ? <Image
                    loading='lazy'
                    src={data.urls.small}
                    width={500}
                    alt={data.alt_description}
                    height={230}
                    className='post_media'
                /> : <NoImage />}

                <div className='post_footer'>
                    <div className='footer_container'>
                        {
                            postFooterData.map(box => {
                                return (data[box.key]>=0) ?<div className='footer_box'>
                                    {box.icon(uiMode, data.liked_by_user)}
                                    <p>{data[box.key]}</p>
                                </div>:null
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard