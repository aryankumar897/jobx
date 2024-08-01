import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Organization from "@/models/organization";


export async function GET() {

    await dbConnect()
    try {


        const organization = await Organization.find({}).sort({ createdAt: -1 })
        return NextResponse.json(organization)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}