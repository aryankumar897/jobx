import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Industry from "@/models/industry";
import slugify from "slugify";


export async function GET(req) {

    await dbConnect();


    try {


        const industrie = await Industry.find({}).sort({ createdAt: -1 })

        return NextResponse.json(industrie)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}




 export  async function POST(req) {

  await dbConnect();
   const   body=await req.json();

   const {name}=body;


   try {
    

  const industry=await Industry.create({name,slug:slugify(name)})

       return NextResponse.json(industry)

   } catch (err) {
       return NextResponse.json({ err: err.message }, { status: 500 })
   }


    
 }