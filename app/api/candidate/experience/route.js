import User from "@/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import Candidate from "@/models/candidate";
import Experience from "@/models/candidateexperience"
import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";
export async function POST(req) {



    const body = await req.json()

    await dbConnect()

    const session = await getServerSession(authOptions)
    const {


        company, 
        department, 
        designation,

        end,
        start,
        responsibilities,
        currently_working



    } = body


    console.log({
        company,
         department,
         designation,

        end,
        start,
        responsibilities,
        currently_working

    })



    try {



        let candidate = await Candidate.findOne({ user_id: session?.user?._id })

        const experience = await Experience.create({
            candidate_id: candidate?._id,
            company, department, designation,

            end,
            start,
            responsibilities,
            currently_working


        })



        console.log(experience)

        return NextResponse.json(experience)

    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message })
    }



}





export async function GET(req) {


    await dbConnect()



    try {
        const session = await getServerSession(authOptions)

        let candidate = await Candidate.findOne({ user_id: session?.user?._id })

        const experience = await Experience.find({ candidate_id: candidate?._id })

        return NextResponse.json(experience)
    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message })
    }


}