import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"



export const config = {
    matcher: [


        "/dashboard/company/:path*",
        "/dashboard/candidate/:path*",
        "/dashboard/admin/:path*",

        "/api/company/:path*",
        "/api/admin:path*",


    ],


}



export default withAuth(



    async function middleware(req) {


        const url = req.nextUrl.pathname;

        const userRole = req.nextauth?.token?.user?.role

        if (url?.includes("/admin") && userRole !== "admin") {

            return NextResponse.redirect(new URL("/", req.url))


        }

        if (url?.includes("/candidate") && userRole !== "candidate") {
            return NextResponse.redirect(new URL("/", req.url))

        }



        if (url?.includes("/company") && userRole !== "company") {
            return NextResponse.redirect(new URL("/", req.url))

        }

    },



{

    callbacks: {


        authorized: ({ token }) => {
            if (!token) {
                return false
            }



        }




    }

}



)
