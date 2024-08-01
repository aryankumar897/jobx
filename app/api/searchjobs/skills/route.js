import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Jobskill from "@/models/job_skills";


export async function POST(req) {
    await dbConnect();
    const body = await req.json();
    const { id } = body


    try {
        const skill = await Jobskill.find({ job_id:id})
        .populate("skill_id")
        .sort({ createdAt: -1 });

 console.log("c",   skill)
        return NextResponse.json(skill);
    } catch (err) {
        return NextResponse.json(err.message, { status: 500 });
    }
}


