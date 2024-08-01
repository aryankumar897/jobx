



import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect"
import User from "@/models/user";
import bcrypt from "bcrypt"

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

export async function POST(req) {

    await dbConnect()
    const body = await req.json();
    console.log(body)
    const { password } = body;
    const session = await getServerSession(authOptions);

    try {

let user =await User.findOne({_id: session.user._id})
      

if(user){


 const hashedPassword=await bcrypt.hash(password,10)
    user.password = hashedPassword;

    await user.save()


    return NextResponse.json("user updated")


}else{

    return NextResponse.json({ err: "use not found" }, { status: 500 })

}



         

     

        console.log("user  saved successfully", user)

        return NextResponse.json({ success: "register sucessfully" })

    } catch (err) {
        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 })
    }

}








