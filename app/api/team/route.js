import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Team from "@/models/team";


export async function GET() {

    await dbConnect()
    try {


        const team = await Team.find({}).sort({ createdAt: -1 })
        return NextResponse.json(team)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}