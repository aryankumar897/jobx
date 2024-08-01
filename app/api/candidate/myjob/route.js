import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";


import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import Candidate from "@/models/candidate";
import Applyjob from "@/models/applyjob";



export async function GET(req) {
    await dbConnect();
    const session = await getServerSession(authOptions);
    // const body = await req.json();


    console.log("id")

    try {


        let candidate = await Candidate.findOne({ user_id: session.user._id });



        const myjobs = await Applyjob.find({
            candidate_id: candidate?._id,
        })

            .populate({
                path: 'job_id',
                populate: {
                    path: 'company_id',
                    populate: {
                        path: 'country',
                        model: 'Country' // Assuming 'Country' is the name of your country model
                    }
                }
            });


   






        console.log("applyjobs", myjobs)
        return NextResponse.json(myjobs);
    } catch (err) {
        console.log(err);
        return NextResponse.json(err.message, { status: 500 });
    }
}