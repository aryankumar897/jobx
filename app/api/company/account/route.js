import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";



import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";



export async function PUT(req) {
    await dbConnect()

    const body = await req.json()
    const { name, email } = body


    const session = await getServerSession(authOptions)

    try {
        let user = await User.findOne({ _id: session.user._id })

        if (user) {

            user.name = name || user?.name;
            user.email = email || user?.email




            await user.save()
            console.log(user)
            return NextResponse.json({ success: "account updated" })


    

        } else {

            return NextResponse.json({ err: " user not found" })


        }





    } catch (err) {
        return NextResponse.json({ err: err.message })
    }


}



