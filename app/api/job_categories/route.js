import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Jobcategory from "@/models/job_categories";


export async function GET() {

    await dbConnect()
    try {


        const jobcategory = await Jobcategory.find({}).sort({ createdAt: -1 })
       
 
        return NextResponse.json(jobcategory)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}