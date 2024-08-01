import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Plan from "@/models/plans";



export async function GET(req) {

    await dbConnect();


    try {


        const plan = await Plan.find({frontendshow:true }).sort({ createdAt: -1 })

        return NextResponse.json(plan)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}

