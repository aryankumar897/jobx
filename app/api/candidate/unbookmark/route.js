import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";



import { getServerSession } from "next-auth/next";

import { authOptions } from "@/utils/authOptions";

import Candidate from "@/models/candidate";
import Jobbookmark from "@/models/jobbookmark";

export async function DELETE(req) {
    await dbConnect();
    const body = await req.json();

    const session = await getServerSession(authOptions);


    const { ids } = body


    try {


        if (!session?.user?._id) {

            return NextResponse.json({ err: "first  you must login" }, { status: "500" })


        }


       

        let candidate = await Candidate.findOne({ user_id: session?.user?._id })



      

        const unbookmark = await Jobbookmark.deleteOne({
            candidate_id: candidate._id,
            job_id: ids

        })

       


     
        return NextResponse.json(unbookmark);
    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 });
    }
}



