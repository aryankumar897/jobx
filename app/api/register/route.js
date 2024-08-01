



import { NextResponse } from "next/server";

import  dbConnect from  "@/utils/dbConnect"
import User from "@/models/user";
import bcrypt from "bcrypt"



export async function POST(req) {

 await dbConnect()
    const body = await req.json();
    console.log(body)
    const { name, email, password, role } = body;

    try {
        

        const user = await new User({ name, email,
             password:await bcrypt.hash(password,10) ,
             
             role }).save()

 console.log("user  saved successfully",user)

  return NextResponse.json({success:"register sucessfully"})

    } catch (err) {
         console.log(err)
        return NextResponse.json({ err: err.message},{status:500})
    }
  
}










// export async function GET(req) {
//     return NextResponse.json({ time: new Date().toLocaleString() });
// }
