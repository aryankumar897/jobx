import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Jobs from "@/models/jobs";







export async function POST(req) {

    await dbConnect()

  
    const body = await req.json()

 const {value ,jobId} = body

    try {

      
 const status=value?"active":"pending";

 const  updatedJob=await Jobs.findByIdAndUpdate(jobId,{status},{new:true})


 if(!updatedJob) {


     return NextResponse.json({ err:"not update"})

 }

     
        return NextResponse.json(updatedJob)


    } catch (err) {
        console.log(err)
        return NextResponse.json({ err: err.message })
    }





}
