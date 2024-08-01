import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Tag from "@/models/tags";


export async function GET() {

    await dbConnect()
    try {


        const tag = await Tag.find({}).sort({ createdAt: -1 })
         console.log("hello")
        return NextResponse.json(tag)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}