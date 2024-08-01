import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Jobrole from "@/models/jobrole";


export async function GET() {

    await dbConnect()
    try {


        const jobrole = await Jobrole.find({}).sort({ createdAt: -1 })
        return NextResponse.json(jobrole)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}