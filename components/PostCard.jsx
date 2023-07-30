import Image from 'next/image'
import '@styles/postCard.css'
import { postFooterData } from '@utils/data'
import { useSelector } from 'react-redux'
import Link from 'next/link'
const PostCard = ({
    data,
}) => {
    const uiMode = useSelector(state => state.global.uiMode)
    return (
        <div key={data.id}>
            <div className='post_body'>
                <div className='post_header'>
                    <div className='post_header_left'>
                        <Link href={`/user/${data.user.id}`}>
                            <Image
                                src={`${data.user.profile_image.small}`}
                                width={50}
                                height={50}
                                alt="post-image"
                                className='post_icon'
                            />
                        </Link>
                        <div className='post_header_text'>
                            <h4>{data.user.instagram_username || "Shivam Verma"}</h4>
                            <p>{data.user.location || "Rishikesh, Uttrakhand"}</p>
                        </div>
                    </div>
                </div>

                <Image
                    src={data.urls.small}
                    width={500}
                    height={230}
                    alt='post_image'
                    className='post_media'
                    layout='respnsive'
                />

                <div className='post_footer'>
                    <div className='footer_container'>
                        {
                            postFooterData.map(box => {
                                return <div className='footer_box'>
                                    {box.icon(uiMode, data.liked_by_user)}
                                    <p>{data.likes}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard