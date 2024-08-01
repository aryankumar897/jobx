import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Profession from "@/models/profession";


export async function GET() {

    await dbConnect()
    try {


        const profession = await Profession.find({}).sort({ createdAt: -1 })
        console.log("hello")
        return NextResponse.json(profession)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}