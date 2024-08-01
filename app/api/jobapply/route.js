import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";



import { getServerSession } from "next-auth/next";

import { authOptions } from "@/utils/authOptions";

import Candidate from "@/models/candidate";
import Applyjob from "@/models/applyjob";
import Jobs from "@/models/jobs";

export async function POST(req) {
    await dbConnect();
    const body = await req.json();

    const session = await getServerSession(authOptions);


    const { id} = body


    try {


        if (!session?.user?._id) {

            return NextResponse.json({ err: "first  you must login" }, { status: "500" })


        }


        if (session?.user?.role != "candidate") {

            return NextResponse.json({ err: "first  you login as  candidate" }, { status: "500" })


        }
     


        let candidate = await Candidate.findOne({ user_id: session?.user?._id })



        if (!candidate) {

            return NextResponse.json({ err: "candidate not found" }, { status: "500" })


        }

        const alreadyexits = await Applyjob.findOne({
            candidate_id: candidate._id,
            job_id: id

        })

        if (alreadyexits) {

            return NextResponse.json({ err: " you  have aleardy applied" }, { status: "500" })


        }



        const applyjobs = await Applyjob.create({
            candidate_id: candidate._id,
            job_id: id

        })





 const  job= await Jobs.findByIdAndUpdate(

{_id:id},
{$inc:{jobcount:1}},

{new:true}

 )


        return NextResponse.json(applyjobs);
    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 });
    }
}



