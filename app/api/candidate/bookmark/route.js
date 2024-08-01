import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";



import { getServerSession } from "next-auth/next";

import { authOptions } from "@/utils/authOptions";

import Candidate from "@/models/candidate";
import Jobbookmark from "@/models/jobbookmark";

export async function POST(req) {
    await dbConnect();
    const body = await req.json();

    const session = await getServerSession(authOptions);


    const { ids } = body


    try {


        if (!session?.user?._id) {

            return NextResponse.json({ err: "first  you must login" }, { status: "500" })


        }


        if (session?.user?.role === "company") {

            return NextResponse.json({ err: "first  you login as  candidate" }, { status: "500" })


        }
        if (session?.user?.role === "admin") {

            return NextResponse.json({ err: "first  you login as  candidate" }, { status: "500" })


        }


        let candidate = await Candidate.findOne({ user_id: session?.user?._id })



        if (!candidate) {

            return NextResponse.json({ err: "candidate not found" }, { status: "500" })


        }

        const alreadyexits = await Jobbookmark.findOne({
            candidate_id: candidate._id,
            job_id: ids

        })

        if (alreadyexits) {

            return NextResponse.json({ err: " you  have aleardy bookmark" }, { status: "500" })


        }



        const bookmark = await Jobbookmark.create({
            candidate_id: candidate._id,
            job_id: ids

        })

        return NextResponse.json(bookmark);
    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 });
    }
}



