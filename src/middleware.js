import { NextResponse } from 'next/server';
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
     const token  = request.cookies.get('authToken')?.value;
     console.log('token' , token);

     if(!token){
        return NextResponse.redirect(new URL('/login', request.url));
     }
     return NextResponse.next();

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/about', '/profile']
}