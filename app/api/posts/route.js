import { postData } from "@utils/data"


export const GET = () => {
    return new Response(JSON.stringify({
        state: 'success',
        data: postData
    }), { status: 200 })
}