import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Company from "@/models/companies";



export async function GET(req) {

    await dbConnect();


    try {


        const company = await Company.find({}).sort({ createdAt: -1 })
 console.log(company)
        return NextResponse.json(company)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}
