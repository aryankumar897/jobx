import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Language from "@/models/language";


export async function GET() {

    await dbConnect()
    try {


        const language = await Language.find({}).sort({ createdAt: -1 })
        console.log("hello")
        return NextResponse.json(language)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}