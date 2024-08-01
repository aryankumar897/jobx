import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Candidateskill from "@/models/candidateskill";




export async function GET(req,context) {

    await dbConnect()
    try {


        const candidateskill = await Candidateskill.find({

candidate_id:context.params.id

        })
        .populate("skill_id","name")
        .sort({ createdAt: -1 })
        return NextResponse.json(candidateskill)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}