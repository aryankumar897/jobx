import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Jobtype from "@/models/job_type";


export async function GET() {

    await dbConnect()
    try {


        const jobtype = await Jobtype.find({}).sort({ createdAt: -1 })
        return NextResponse.json(jobtype)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}