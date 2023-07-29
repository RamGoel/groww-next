import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    if(params.id===null){
        return new Response(`ID required`, { status: 400 })
    }
    return new Response(`Id is ${params.id}`, { status: 200 })
}