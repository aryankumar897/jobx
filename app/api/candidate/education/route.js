import User from "@/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import Candidate from "@/models/candidate";
import Education from "@/models/education"
import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";




export async function POST(req) {



    const body = await req.json()

    await dbConnect()

    const session = await getServerSession(authOptions)
    const {


       level,
       degree,
       year,
       notes,


    } = body


    console.log({

        level,
        degree,
        year,
        notes,



    })



    try {



        let candidate = await Candidate.findOne({ user_id: session?.user?._id })

        const education = await Education.create({
            candidate_id: candidate?._id,

            level,
            degree,
            year,
            notes,



        })



        console.log(education)

        return NextResponse.json(education)

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

        const education = await Education.find({ candidate_id: candidate?._id })

        return NextResponse.json(education)
    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message })
    }


}