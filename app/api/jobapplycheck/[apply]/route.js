import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";



import { getServerSession } from "next-auth/next";

import { authOptions } from "@/utils/authOptions";

import Candidate from "@/models/candidate";
import Applyjob from "@/models/applyjob";
import Jobs from "@/models/jobs";

export async function GET(req, context) {
    await dbConnect();


    const session = await getServerSession(authOptions);





    try {







        let candidate = await Candidate.findOne({ user_id: session?.user?._id })


        const job = await Jobs.findOne({ slug: context.params.apply })


        const alreadyexits = await Applyjob.findOne({
            candidate_id: candidate._id,
            job_id: job?._id

        })


 console.log(alreadyexits )

        return NextResponse.json({ alreadyexits });
    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 });
    }
}



