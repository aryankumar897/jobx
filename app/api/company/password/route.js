import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";

import slugify from "slugify";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";



export async function PUT(req) {
    await dbConnect()

    const body = await req.json()
    const { password } = body


    const session = await getServerSession(authOptions)

    try {
        let user = await User.findOne({ _id: session.user._id })

        if (user) {

            const hashedPassword = await bcrypt.hash(password, 10)

            user.password = hashedPassword;

 await user.save();

            return NextResponse.json({ success: "password updated" })

        }else{

            return NextResponse.json({ err: " user not found" })


        }





    } catch (err) {
        return NextResponse.json({ err: err.message })
    }


}



