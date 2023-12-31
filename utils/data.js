import { DocumentDownload, ElementPlus, Eye, Heart, Logout, MessageText, Profile, Save2, Send2, Settings } from "iconsax-react";
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
        icon:(theme, isSelected)=><Heart color={isSelected?'red':styles[theme].text} size={18} variant={isSelected?'Bold':'Linear'} />,
        key:"likes"
    },
    {
        icon:(theme)=><Eye color={styles[theme].text} size={18} />,
        key:"views"
    },
    {
        icon:(theme)=><DocumentDownload color={styles[theme].text} size={18} />,
        key:"downloads"
    },
    // {
    //     icon:(theme)=><Save2 color={styles[theme].text} size={18} />,
    //     key:"saves"
    // },
]
