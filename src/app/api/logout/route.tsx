import { NextResponse } from "next/server";

export async function POST() {

    const response =  NextResponse.json({success: true , message: 'successfully logout'});

    response.cookies.set('authToken', "", {
        httpOnly: true,
        path : '/',
        expires : new Date(0)

    })

    return response;
    
}