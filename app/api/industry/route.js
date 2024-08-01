import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Industry from "@/models/industry";


export async function GET() {

    await dbConnect()
    try {


        const industry = await Industry.find({}).sort({ createdAt: -1 })
        return NextResponse.json(industry)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}