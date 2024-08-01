import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Educationids from "@/models/educationid";


export async function GET() {

    await dbConnect()
    try {


        const educationids = await Educationids.find({}).sort({ createdAt: -1 })
        return NextResponse.json(educationids)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}