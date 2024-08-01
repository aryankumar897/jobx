import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Jobexperience_id from "@/models/jobexperienceid";


export async function GET() {

    await dbConnect()
    try {


        const jobexperience_id = await Jobexperience_id.find({}).sort({ createdAt: -1 })
        return NextResponse.json(jobexperience_id)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}