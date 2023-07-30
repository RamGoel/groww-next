const { createSlice } = require("@reduxjs/toolkit");
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
    uiMode: 'light',
    feedData: [
        {
            "id": "iZ38zK2LruM",
            "slug": "iZ38zK2LruM",
            "created_at": "2020-10-30T09:29:34Z",
            "updated_at": "2023-07-30T00:16:14Z",
            "promoted_at": "2023-07-24T16:00:01Z",
            "width": 2800,
            "height": 3500,
            "color": "#f3f3f3",
            "blur_hash": "L~LNiHNGj[ay~qf5ayj@bcofWBj[",
            "description": null,
            "alt_description": "brown and black mountains under white sky during daytime",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1604050170221-aed634784f64?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1604050170221-aed634784f64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1604050170221-aed634784f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1604050170221-aed634784f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1604050170221-aed634784f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1604050170221-aed634784f64"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/iZ38zK2LruM",
                "html": "https://unsplash.com/photos/iZ38zK2LruM",
                "download": "https://unsplash.com/photos/iZ38zK2LruM/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8",
                "download_location": "https://api.unsplash.com/photos/iZ38zK2LruM/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8"
            },
            "likes": 170,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "aJ_1Ue9c7aQ",
                "updated_at": "2023-07-26T04:03:11Z",
                "username": "cors123",
                "name": "Corsin Taisch",
                "first_name": "Corsin",
                "last_name": "Taisch",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": "enjoy!\r\n and I would be happy about a follow on instagram @cors.t :)",
                "location": null,
                "links": {
                    "self": "https://api.unsplash.com/users/cors123",
                    "html": "https://unsplash.com/@cors123",
                    "photos": "https://api.unsplash.com/users/cors123/photos",
                    "likes": "https://api.unsplash.com/users/cors123/likes",
                    "portfolio": "https://api.unsplash.com/users/cors123/portfolio",
                    "following": "https://api.unsplash.com/users/cors123/following",
                    "followers": "https://api.unsplash.com/users/cors123/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1604139521367-bd98c92972d9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1604139521367-bd98c92972d9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1604139521367-bd98c92972d9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "cors.t",
                "total_collections": 0,
                "total_likes": 16,
                "total_photos": 24,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": "cors.t",
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "Hasselblad",
                "model": "L1D-20c",
                "name": "Hasselblad, L1D-20c",
                "exposure_time": "1/2000",
                "aperture": "5.0",
                "focal_length": "10.3",
                "iso": 400
            },
            "location": {
                "name": "Sot Schinera, Tschlin, Schweiz",
                "city": "Tschlin",
                "country": "Schweiz",
                "position": {
                    "latitude": 46.875618329999995,
                    "longitude": 10.43001167
                }
            },
            "views": 865452,
            "downloads": 5271
        },
        {
            "id": "9-1_hZRvys0",
            "slug": "9-1_hZRvys0",
            "created_at": "2023-05-27T17:39:44Z",
            "updated_at": "2023-07-29T20:36:31Z",
            "promoted_at": "2023-07-23T16:16:02Z",
            "width": 8000,
            "height": 6000,
            "color": "#262626",
            "blur_hash": "L14.YlH]00W9M|MyWA-:IBtQxuRQ",
            "description": "Car shot in the middle of a hood, in Italy. Follow me on instagram for more: sir.simo",
            "alt_description": "an aerial view of a winding road in the woods",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1685208711000-0946e951f651?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1685208711000-0946e951f651?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1685208711000-0946e951f651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1685208711000-0946e951f651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1685208711000-0946e951f651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1685208711000-0946e951f651"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/9-1_hZRvys0",
                "html": "https://unsplash.com/photos/9-1_hZRvys0",
                "download": "https://unsplash.com/photos/9-1_hZRvys0/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8",
                "download_location": "https://api.unsplash.com/photos/9-1_hZRvys0/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8"
            },
            "likes": 31,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {
                "wallpapers": {
                    "status": "unevaluated"
                }
            },
            "user": {
                "id": "xq3D2LlqiUk",
                "updated_at": "2023-07-30T03:02:14Z",
                "username": "sirsimo",
                "name": "Sir. Simo",
                "first_name": "Sir.",
                "last_name": "Simo",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": "25yo Italian Artist\r\nPhotographer | Videomaker | Let's talk on IG: @sir.simo                  ",
                "location": "Italy",
                "links": {
                    "self": "https://api.unsplash.com/users/sirsimo",
                    "html": "https://unsplash.com/@sirsimo",
                    "photos": "https://api.unsplash.com/users/sirsimo/photos",
                    "likes": "https://api.unsplash.com/users/sirsimo/likes",
                    "portfolio": "https://api.unsplash.com/users/sirsimo/portfolio",
                    "following": "https://api.unsplash.com/users/sirsimo/following",
                    "followers": "https://api.unsplash.com/users/sirsimo/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1690390419668-98394dc74d40image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1690390419668-98394dc74d40image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1690390419668-98394dc74d40image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "sir.simo",
                "total_collections": 3,
                "total_likes": 46,
                "total_photos": 125,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "sir.simo",
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "DJI",
                "model": "FC3170",
                "name": "DJI, FC3170",
                "exposure_time": "1/60",
                "aperture": "2.8",
                "focal_length": "4.5",
                "iso": 200
            },
            "location": {
                "name": "Aprica, SO, Italia",
                "city": "Aprica",
                "country": "Italia",
                "position": {
                    "latitude": 46.153959,
                    "longitude": 10.152376
                }
            },
            "views": 420580,
            "downloads": 4075
        },
        {
            "id": "mAxeSh_27ec",
            "slug": "a-man-wearing-a-hat-and-sunglasses-poses-for-a-picture-mAxeSh_27ec",
            "created_at": "2023-06-30T10:34:13Z",
            "updated_at": "2023-07-30T10:37:58Z",
            "promoted_at": "2023-07-04T13:56:01Z",
            "width": 4313,
            "height": 6400,
            "color": "#f3f3f3",
            "blur_hash": "LVN,}N?b-;t700xuM{j[~qWBDiof",
            "description": null,
            "alt_description": "a man wearing a hat and sunglasses poses for a picture",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1688121244779-5b42d7d32275?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1688121244779-5b42d7d32275?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1688121244779-5b42d7d32275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1688121244779-5b42d7d32275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1688121244779-5b42d7d32275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1688121244779-5b42d7d32275"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-man-wearing-a-hat-and-sunglasses-poses-for-a-picture-mAxeSh_27ec",
                "html": "https://unsplash.com/photos/a-man-wearing-a-hat-and-sunglasses-poses-for-a-picture-mAxeSh_27ec",
                "download": "https://unsplash.com/photos/mAxeSh_27ec/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8",
                "download_location": "https://api.unsplash.com/photos/mAxeSh_27ec/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8"
            },
            "likes": 18,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {
                "fashion-beauty": {
                    "status": "rejected"
                }
            },
            "user": {
                "id": "NnvzCv7bJBw",
                "updated_at": "2023-07-28T17:16:17Z",
                "username": "rubenev520",
                "name": "Ruben Valenzuela",
                "first_name": "Ruben",
                "last_name": "Valenzuela",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": null,
                "location": "Los Angeles, CA",
                "links": {
                    "self": "https://api.unsplash.com/users/rubenev520",
                    "html": "https://unsplash.com/@rubenev520",
                    "photos": "https://api.unsplash.com/users/rubenev520/photos",
                    "likes": "https://api.unsplash.com/users/rubenev520/likes",
                    "portfolio": "https://api.unsplash.com/users/rubenev520/portfolio",
                    "following": "https://api.unsplash.com/users/rubenev520/following",
                    "followers": "https://api.unsplash.com/users/rubenev520/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1677369354113-b23055a85961image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1677369354113-b23055a85961image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1677369354113-b23055a85961image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "Ruben_Valenzuela_Media",
                "total_collections": 1,
                "total_likes": 161,
                "total_photos": 164,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": "Ruben_Valenzuela_Media",
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            },
            "exif": {
                "make": null,
                "model": null,
                "name": null,
                "exposure_time": null,
                "aperture": null,
                "focal_length": null,
                "iso": null
            },
            "location": {
                "name": null,
                "city": null,
                "country": null,
                "position": {
                    "latitude": null,
                    "longitude": null
                }
            },
            "views": 396997,
            "downloads": 2402
        },
        {
            "id": "VaRup8cxL_o",
            "slug": "a-couple-of-tall-buildings-sitting-next-to-each-other-VaRup8cxL_o",
            "created_at": "2023-07-03T11:04:16Z",
            "updated_at": "2023-07-29T17:40:32Z",
            "promoted_at": "2023-07-10T09:00:01Z",
            "width": 3581,
            "height": 5372,
            "color": "#262626",
            "blur_hash": "LHCF#C=xxGWVtlRjR*ay14EMI:s.",
            "description": null,
            "alt_description": "a couple of tall buildings sitting next to each other",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1688382139135-950a4e886ead?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1688382139135-950a4e886ead?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1688382139135-950a4e886ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1688382139135-950a4e886ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1688382139135-950a4e886ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1688382139135-950a4e886ead"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-couple-of-tall-buildings-sitting-next-to-each-other-VaRup8cxL_o",
                "html": "https://unsplash.com/photos/a-couple-of-tall-buildings-sitting-next-to-each-other-VaRup8cxL_o",
                "download": "https://unsplash.com/photos/VaRup8cxL_o/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8",
                "download_location": "https://api.unsplash.com/photos/VaRup8cxL_o/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8"
            },
            "likes": 94,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "yIWa6itSh0U",
                "updated_at": "2023-07-30T03:01:34Z",
                "username": "mr_daaaa",
                "name": "Mr. Daaaa",
                "first_name": "Mr.",
                "last_name": "Daaaa",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": "Hi, I'm an amateur photographer. If you want to know me, please leave me a message, I will reply to your message as soon as possible. Thank you :-)  Or you can add my WeChat: Mr_Daaaa",
                "location": "China",
                "links": {
                    "self": "https://api.unsplash.com/users/mr_daaaa",
                    "html": "https://unsplash.com/@mr_daaaa",
                    "photos": "https://api.unsplash.com/users/mr_daaaa/photos",
                    "likes": "https://api.unsplash.com/users/mr_daaaa/likes",
                    "portfolio": "https://api.unsplash.com/users/mr_daaaa/portfolio",
                    "following": "https://api.unsplash.com/users/mr_daaaa/following",
                    "followers": "https://api.unsplash.com/users/mr_daaaa/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1586850137560-a889d578cf7aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1586850137560-a889d578cf7aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1586850137560-a889d578cf7aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": null,
                "total_collections": 0,
                "total_likes": 0,
                "total_photos": 189,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": null,
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "NIKON CORPORATION",
                "model": "NIKON Z fc",
                "name": "NIKON CORPORATION, NIKON Z fc",
                "exposure_time": "1/20",
                "aperture": "5.6",
                "focal_length": "170.0",
                "iso": 500
            },
            "location": {
                "name": "Kunming, Yunnan, China",
                "city": "Kunming",
                "country": "China",
                "position": {
                    "latitude": 24.87966,
                    "longitude": 102.83322
                }
            },
            "views": 461252,
            "downloads": 3798
        },
        {
            "id": "xRnK7DtTI4I",
            "slug": "a-building-that-has-many-windows-in-it-xRnK7DtTI4I",
            "created_at": "2023-07-04T19:37:55Z",
            "updated_at": "2023-07-29T22:39:32Z",
            "promoted_at": "2023-07-20T16:16:01Z",
            "width": 5951,
            "height": 3967,
            "color": "#d9d9d9",
            "blur_hash": "LPLNb}=X0LIU-oxYofs.D*WCbIWX",
            "description": null,
            "alt_description": "a building that has many windows in it",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1688498465380-74092922165e?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1688498465380-74092922165e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1688498465380-74092922165e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1688498465380-74092922165e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1688498465380-74092922165e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1688498465380-74092922165e"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-building-that-has-many-windows-in-it-xRnK7DtTI4I",
                "html": "https://unsplash.com/photos/a-building-that-has-many-windows-in-it-xRnK7DtTI4I",
                "download": "https://unsplash.com/photos/xRnK7DtTI4I/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8",
                "download_location": "https://api.unsplash.com/photos/xRnK7DtTI4I/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8"
            },
            "likes": 33,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {
                "street-photography": {
                    "status": "rejected"
                },
                "architecture-interior": {
                    "status": "rejected"
                },
                "textures-patterns": {
                    "status": "rejected"
                },
                "experimental": {
                    "status": "approved",
                    "approved_on": "2023-07-17T07:28:39Z"
                },
                "wallpapers": {
                    "status": "rejected"
                }
            },
            "user": {
                "id": "Fs9821oZIxE",
                "updated_at": "2023-07-29T10:16:28Z",
                "username": "noa69",
                "name": "Yuriy Vertikov",
                "first_name": "Yuriy",
                "last_name": "Vertikov",
                "twitter_username": null,
                "portfolio_url": "https://500px.com/p/noa69?view=photos",
                "bio": null,
                "location": "Kursk, Russia",
                "links": {
                    "self": "https://api.unsplash.com/users/noa69",
                    "html": "https://unsplash.com/@noa69",
                    "photos": "https://api.unsplash.com/users/noa69/photos",
                    "likes": "https://api.unsplash.com/users/noa69/likes",
                    "portfolio": "https://api.unsplash.com/users/noa69/portfolio",
                    "following": "https://api.unsplash.com/users/noa69/following",
                    "followers": "https://api.unsplash.com/users/noa69/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1670939747583-5f365bc76540image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1670939747583-5f365bc76540image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1670939747583-5f365bc76540image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "noa69n",
                "total_collections": 0,
                "total_likes": 6,
                "total_photos": 800,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": "noa69n",
                    "portfolio_url": "https://500px.com/p/noa69?view=photos",
                    "twitter_username": null,
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "SONY",
                "model": "ILCE-5100",
                "name": "SONY, ILCE-5100",
                "exposure_time": "1/125",
                "aperture": "4.0",
                "focal_length": "50.0",
                "iso": 160
            },
            "location": {
                "name": null,
                "city": null,
                "country": null,
                "position": {
                    "latitude": 0,
                    "longitude": 0
                }
            },
            "views": 509225,
            "downloads": 4123
        },
        {
            "id": "1cGZZ0JzG7o",
            "slug": "a-woman-standing-in-front-of-a-waterfall-1cGZZ0JzG7o",
            "created_at": "2023-07-11T15:37:18Z",
            "updated_at": "2023-07-29T19:39:48Z",
            "promoted_at": "2023-07-12T07:16:01Z",
            "width": 7951,
            "height": 4679,
            "color": "#26260c",
            "blur_hash": "L98NUo9H0L_2E2t7%1Io9G%L%MD*",
            "description": "The geothermal river Kerosene Creek on the North Island of New Zealand is an amazing place to photograph.",
            "alt_description": "a woman standing in front of a waterfall",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1689089764982-3c081cc0089a?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1689089764982-3c081cc0089a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1689089764982-3c081cc0089a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1689089764982-3c081cc0089a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1689089764982-3c081cc0089a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1689089764982-3c081cc0089a"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-woman-standing-in-front-of-a-waterfall-1cGZZ0JzG7o",
                "html": "https://unsplash.com/photos/a-woman-standing-in-front-of-a-waterfall-1cGZZ0JzG7o",
                "download": "https://unsplash.com/photos/1cGZZ0JzG7o/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8",
                "download_location": "https://api.unsplash.com/photos/1cGZZ0JzG7o/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8"
            },
            "likes": 48,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "gQm918GnYgc",
                "updated_at": "2023-07-28T09:55:35Z",
                "username": "hudsonj142",
                "name": "Jason Hudson",
                "first_name": "Jason",
                "last_name": "Hudson",
                "twitter_username": "Edenphotograph1",
                "portfolio_url": "http://www.jason-hudson.co.uk",
                "bio": "Runner-up World Landscape Photography Competition 2020\r\nCommended 5 times in Landscape Photographer of the Year Finalist in Weather Photographer of the Year  Lake District photography workshop at www.jason-hudson.co.uk/workshops",
                "location": "Penrith, Cumbria",
                "links": {
                    "self": "https://api.unsplash.com/users/hudsonj142",
                    "html": "https://unsplash.com/@hudsonj142",
                    "photos": "https://api.unsplash.com/users/hudsonj142/photos",
                    "likes": "https://api.unsplash.com/users/hudsonj142/likes",
                    "portfolio": "https://api.unsplash.com/users/hudsonj142/portfolio",
                    "following": "https://api.unsplash.com/users/hudsonj142/following",
                    "followers": "https://api.unsplash.com/users/hudsonj142/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1649258153105-05f01a60cd27image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1649258153105-05f01a60cd27image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1649258153105-05f01a60cd27image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "jasonhudson142",
                "total_collections": 0,
                "total_likes": 3,
                "total_photos": 68,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "jasonhudson142",
                    "portfolio_url": "http://www.jason-hudson.co.uk",
                    "twitter_username": "Edenphotograph1",
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "SONY",
                "model": "ILCE-7RM3",
                "name": "SONY, ILCE-7RM3",
                "exposure_time": "6",
                "aperture": "14.0",
                "focal_length": "26.0",
                "iso": 100
            },
            "location": {
                "name": null,
                "city": null,
                "country": null,
                "position": {
                    "latitude": 0,
                    "longitude": 0
                }
            },
            "views": 422845,
            "downloads": 5064
        },
        {
            "id": "uIjLT4VXFIU",
            "slug": "a-tall-building-with-a-blue-door-and-window-uIjLT4VXFIU",
            "created_at": "2023-07-17T04:38:00Z",
            "updated_at": "2023-07-30T00:37:15Z",
            "promoted_at": "2023-07-17T19:24:02Z",
            "width": 4000,
            "height": 6000,
            "color": "#c0c0a6",
            "blur_hash": "LHD]em01x[-:tR9Zjs%2-QbwM{%1",
            "description": null,
            "alt_description": "a tall building with a blue door and window",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1689568666264-8a030434f121?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1689568666264-8a030434f121?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1689568666264-8a030434f121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1689568666264-8a030434f121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1689568666264-8a030434f121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1689568666264-8a030434f121"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-tall-building-with-a-blue-door-and-window-uIjLT4VXFIU",
                "html": "https://unsplash.com/photos/a-tall-building-with-a-blue-door-and-window-uIjLT4VXFIU",
                "download": "https://unsplash.com/photos/uIjLT4VXFIU/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8",
                "download_location": "https://api.unsplash.com/photos/uIjLT4VXFIU/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8"
            },
            "likes": 88,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "yHabkNEdUC8",
                "updated_at": "2023-07-30T07:30:34Z",
                "username": "blenderdesigner_1688",
                "name": "Sufyan",
                "first_name": "Sufyan",
                "last_name": null,
                "twitter_username": null,
                "portfolio_url": null,
                "bio": "Not all geometry is created equal!",
                "location": "FL",
                "links": {
                    "self": "https://api.unsplash.com/users/blenderdesigner_1688",
                    "html": "https://unsplash.com/@blenderdesigner_1688",
                    "photos": "https://api.unsplash.com/users/blenderdesigner_1688/photos",
                    "likes": "https://api.unsplash.com/users/blenderdesigner_1688/likes",
                    "portfolio": "https://api.unsplash.com/users/blenderdesigner_1688/portfolio",
                    "following": "https://api.unsplash.com/users/blenderdesigner_1688/following",
                    "followers": "https://api.unsplash.com/users/blenderdesigner_1688/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1682645313821-ece27e015922image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1682645313821-ece27e015922image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1682645313821-ece27e015922image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": null,
                "total_collections": 14,
                "total_likes": 900,
                "total_photos": 458,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": null,
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            },
            "exif": {
                "make": null,
                "model": null,
                "name": null,
                "exposure_time": null,
                "aperture": null,
                "focal_length": null,
                "iso": null
            },
            "location": {
                "name": null,
                "city": null,
                "country": null,
                "position": {
                    "latitude": 0,
                    "longitude": 0
                }
            },
            "views": 399341,
            "downloads": 2938
        },
        {
            "id": "lU-9XF7Prt0",
            "slug": "a-train-station-with-two-trains-parked-inside-of-it-lU-9XF7Prt0",
            "created_at": "2023-07-17T17:09:55Z",
            "updated_at": "2023-07-29T12:38:31Z",
            "promoted_at": "2023-07-22T08:40:01Z",
            "width": 5045,
            "height": 7563,
            "color": "#404040",
            "blur_hash": "LDB3yis:9FoLIVj[WVa}0MWWx]j]",
            "description": null,
            "alt_description": "a train station with two trains parked inside of it",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1689613188426-130b2d01c9ca?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1689613188426-130b2d01c9ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1689613188426-130b2d01c9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1689613188426-130b2d01c9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1689613188426-130b2d01c9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1689613188426-130b2d01c9ca"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-train-station-with-two-trains-parked-inside-of-it-lU-9XF7Prt0",
                "html": "https://unsplash.com/photos/a-train-station-with-two-trains-parked-inside-of-it-lU-9XF7Prt0",
                "download": "https://unsplash.com/photos/lU-9XF7Prt0/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8",
                "download_location": "https://api.unsplash.com/photos/lU-9XF7Prt0/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8"
            },
            "likes": 80,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {
                "street-photography": {
                    "status": "unevaluated"
                }
            },
            "user": {
                "id": "xq3D2LlqiUk",
                "updated_at": "2023-07-30T03:02:14Z",
                "username": "sirsimo",
                "name": "Sir. Simo",
                "first_name": "Sir.",
                "last_name": "Simo",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": "25yo Italian Artist\r\nPhotographer | Videomaker | Let's talk on IG: @sir.simo                  ",
                "location": "Italy",
                "links": {
                    "self": "https://api.unsplash.com/users/sirsimo",
                    "html": "https://unsplash.com/@sirsimo",
                    "photos": "https://api.unsplash.com/users/sirsimo/photos",
                    "likes": "https://api.unsplash.com/users/sirsimo/likes",
                    "portfolio": "https://api.unsplash.com/users/sirsimo/portfolio",
                    "following": "https://api.unsplash.com/users/sirsimo/following",
                    "followers": "https://api.unsplash.com/users/sirsimo/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1690390419668-98394dc74d40image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1690390419668-98394dc74d40image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1690390419668-98394dc74d40image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "sir.simo",
                "total_collections": 3,
                "total_likes": 46,
                "total_photos": 125,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "sir.simo",
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "SONY",
                "model": "ILCE-7RM3",
                "name": "SONY, ILCE-7RM3",
                "exposure_time": "1/500",
                "aperture": "2.0",
                "focal_length": "35.0",
                "iso": 125
            },
            "location": {
                "name": "Porto, Portogallo",
                "city": "Porto",
                "country": "Portogallo",
                "position": {
                    "latitude": 41.157944,
                    "longitude": -8.629105
                }
            },
            "views": 341404,
            "downloads": 3207
        },
        {
            "id": "R7XdkzN6soA",
            "slug": "a-close-up-of-a-car-with-a-flower-on-it-R7XdkzN6soA",
            "created_at": "2023-07-19T14:18:16Z",
            "updated_at": "2023-07-29T22:39:48Z",
            "promoted_at": "2023-07-24T13:08:01Z",
            "width": 6000,
            "height": 4000,
            "color": "#c0c0c0",
            "blur_hash": "LSH2f$9F9FD%~qD%RjM{M{RjRjt7",
            "description": null,
            "alt_description": "a close up of a car with a flower on it",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1689776289702-c7b72967ecce?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1689776289702-c7b72967ecce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1689776289702-c7b72967ecce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1689776289702-c7b72967ecce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1689776289702-c7b72967ecce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1689776289702-c7b72967ecce"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-close-up-of-a-car-with-a-flower-on-it-R7XdkzN6soA",
                "html": "https://unsplash.com/photos/a-close-up-of-a-car-with-a-flower-on-it-R7XdkzN6soA",
                "download": "https://unsplash.com/photos/R7XdkzN6soA/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8",
                "download_location": "https://api.unsplash.com/photos/R7XdkzN6soA/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8"
            },
            "likes": 12,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "seE4fA8Y__E",
                "updated_at": "2023-07-29T13:01:49Z",
                "username": "natinati",
                "name": "Nati Melnychuk",
                "first_name": "Nati",
                "last_name": "Melnychuk",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": null,
                "location": "Anagni, FR, Italy ",
                "links": {
                    "self": "https://api.unsplash.com/users/natinati",
                    "html": "https://unsplash.com/@natinati",
                    "photos": "https://api.unsplash.com/users/natinati/photos",
                    "likes": "https://api.unsplash.com/users/natinati/likes",
                    "portfolio": "https://api.unsplash.com/users/natinati/portfolio",
                    "following": "https://api.unsplash.com/users/natinati/following",
                    "followers": "https://api.unsplash.com/users/natinati/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1594918935171-007d2093336dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1594918935171-007d2093336dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1594918935171-007d2093336dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "instagram.com/natischia",
                "total_collections": 0,
                "total_likes": 689,
                "total_photos": 1874,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "instagram.com/natischia",
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            },
            "exif": {
                "make": null,
                "model": null,
                "name": null,
                "exposure_time": null,
                "aperture": null,
                "focal_length": null,
                "iso": null
            },
            "location": {
                "name": "Italia, Italia",
                "city": null,
                "country": "Italia",
                "position": {
                    "latitude": 42.6729993,
                    "longitude": 12.5926838
                }
            },
            "views": 198872,
            "downloads": 2601
        },
        {
            "id": "kRFIe9ZuGJw",
            "slug": "a-close-up-of-a-cell-phone-with-a-blurry-background-kRFIe9ZuGJw",
            "created_at": "2023-07-20T11:03:26Z",
            "updated_at": "2023-07-30T02:38:05Z",
            "promoted_at": "2023-07-20T12:16:01Z",
            "width": 2850,
            "height": 3800,
            "color": "#d9d9d9",
            "blur_hash": "LHM@}zx-n%_3zrELkX%N_4S6RjRj",
            "description": null,
            "alt_description": "a close up of a cell phone with a blurry background",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1689850969311-e7186e92c93d?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1689850969311-e7186e92c93d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1689850969311-e7186e92c93d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1689850969311-e7186e92c93d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1689850969311-e7186e92c93d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1689850969311-e7186e92c93d"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-close-up-of-a-cell-phone-with-a-blurry-background-kRFIe9ZuGJw",
                "html": "https://unsplash.com/photos/a-close-up-of-a-cell-phone-with-a-blurry-background-kRFIe9ZuGJw",
                "download": "https://unsplash.com/photos/kRFIe9ZuGJw/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8",
                "download_location": "https://api.unsplash.com/photos/kRFIe9ZuGJw/download?ixid=M3w0ODA4MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA3MTM5Nzd8"
            },
            "likes": 79,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {
                "3d-renders": {
                    "status": "unevaluated"
                }
            },
            "user": {
                "id": "Fn9G4UNtFbY",
                "updated_at": "2023-07-30T08:13:48Z",
                "username": "allisonsaeng",
                "name": "Allison Saeng",
                "first_name": "Allison",
                "last_name": "Saeng",
                "twitter_username": null,
                "portfolio_url": "https://www.behance.net/allisonsaeng",
                "bio": "Creative and Designer ",
                "location": "Remote working",
                "links": {
                    "self": "https://api.unsplash.com/users/allisonsaeng",
                    "html": "https://unsplash.com/@allisonsaeng",
                    "photos": "https://api.unsplash.com/users/allisonsaeng/photos",
                    "likes": "https://api.unsplash.com/users/allisonsaeng/likes",
                    "portfolio": "https://api.unsplash.com/users/allisonsaeng/portfolio",
                    "following": "https://api.unsplash.com/users/allisonsaeng/following",
                    "followers": "https://api.unsplash.com/users/allisonsaeng/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1644189579276-23ef0268f169image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1644189579276-23ef0268f169image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1644189579276-23ef0268f169image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "aomaunnada",
                "total_collections": 28,
                "total_likes": 0,
                "total_photos": 2044,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "aomaunnada",
                    "portfolio_url": "https://www.behance.net/allisonsaeng",
                    "twitter_username": null,
                    "paypal_email": null
                }
            },
            "exif": {
                "make": null,
                "model": null,
                "name": null,
                "exposure_time": null,
                "aperture": null,
                "focal_length": null,
                "iso": null
            },
            "location": {
                "name": null,
                "city": null,
                "country": null,
                "position": {
                    "latitude": 0,
                    "longitude": 0
                }
            },
            "views": 1015032,
            "downloads": 13100
        }
    ],
    userData:null

}
const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        changeUiMode: (state, action) => {
            state.uiMode = state.uiMode == 'dark' ? 'light' : 'dark'
        },
        saveFeedData: (state, action) => {
            state.feedData = [...state.feedData, ...action.payload]
        },
        saveUserData: (state, action) => {
            state.userData = action.payload
        },

    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        },
    },
})

export const { changeUiMode, saveFeedData, saveUserData } = globalSlice.actions

export default globalSlice.reducer