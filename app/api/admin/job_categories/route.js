import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Jobcategory from "@/models/job_categories";
import slugify from "slugify";



export async function GET() {

    await dbConnect();

    try {

        const jobcat = await Jobcategory.find({}).sort({ createdAt: -1 })
        return NextResponse.json(jobcat)

    } catch (err) {


        return NextResponse.json({ err: err.message }, { status: 500 })


    }


}


export async function POST(req){

await dbConnect();
const  body=await req.json();
const  {name,icon}=body

try {
    
    const jobcat = await Jobcategory.create({name,icon,slug:slugify(name)})

    return NextResponse.json(jobcat)

} catch (err) {
    return NextResponse.json({ err: err.message }, { status: 500 })

}


}