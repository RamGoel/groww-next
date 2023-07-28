import { ElementPlus, Heart, Logout, MessageText, Profile, Save2, Send2, Settings } from "iconsax-react";
import { styles } from "./styles";

export const sidebarData=[
    {
        text:"Liked Posts",
        icon:(theme)=><Heart color={styles[theme].text} />
    },
    {
        text:"Create",
        icon:(theme)=><ElementPlus color={styles[theme].text} />
    },
    {
        text:"Settings",
        icon:(theme)=><Settings color={styles[theme].text} />
    },
    {
        text:"Profile",
        icon:(theme)=><Profile color={styles[theme].text} />
    },
    {
        text:"Log out",
        icon:(theme)=><Logout color={styles[theme].text} />
    },
]


export const postFooterData=[
    {
        icon:(theme)=><Heart color={styles[theme].text} size={18} />,
        key:"likes"
    },
    {
        icon:(theme)=><MessageText color={styles[theme].text} size={18} />,
        key:"comments"
    },
    {
        icon:(theme)=><Send2 color={styles[theme].text} size={18} />,
        key:"shares"
    },
    {
        icon:(theme)=><Save2 color={styles[theme].text} size={18} />,
        key:"saves"
    },
]

export const postData=[
    {
        id:'njd92ewi022o20',
        user:{
            name:"Shreya Verma",
            image:"/profile.jpg",
            username:"@shreuva",
        },
        date:"28-07-2023",
        time:"13:02",
        likes:32,
        comments:3,
        shares:77,
        saves:12,
        imageUrl:"https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*",
        location:"Gurugram, Haryana"
    },
    {
        id:'njd92ewi022o20',
        user:{
            name:"Shreya Verma",
            image:"/profile.jpg",
            username:"@shreuva",
        },
        date:"28-07-2023",
        time:"13:02",
        likes:32,
        comments:3,
        shares:77,
        saves:12,
        imageUrl:"https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*",
        location:"Gurugram, Haryana"
    },
    {
        id:'njd92ewi022o20',
        user:{
            name:"Shreya Verma",
            image:"/profile.jpg",
            username:"@shreuva",
        },
        date:"28-07-2023",
        time:"13:02",
        likes:32,
        comments:3,
        shares:77,
        saves:12,
        imageUrl:"https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*",
        location:"Gurugram, Haryana"
    },
    {
        id:'njd92ewi022o20',
        user:{
            name:"Shreya Verma",
            image:"/profile.jpg",
            username:"@shreuva",
        },
        date:"28-07-2023",
        time:"13:02",
        likes:32,
        comments:3,
        shares:77,
        saves:12,
        imageUrl:"https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*",
        location:"Gurugram, Haryana"
    },
]