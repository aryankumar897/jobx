


import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Salarytype from "@/models/salarytype";


export async function GET() {

    await dbConnect()
    try {


        const salarytype = await Salarytype.find({}).sort({ createdAt: -1 })
        return NextResponse.json(salarytype)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}