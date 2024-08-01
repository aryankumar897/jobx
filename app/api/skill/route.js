import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Skill from "@/models/skill";


export async function GET() {

    await dbConnect()
    try {


        const skill = await Skill.find({}).sort({ createdAt: -1 })
        console.log("hello")
        return NextResponse.json(skill)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}