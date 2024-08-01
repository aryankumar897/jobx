import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import User from "@/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import Candidate from "@/models/candidate";

import Applyjob from "@/models/applyjob";

import Jobbookmark from "@/models/jobbookmark";

export async function GET() {

    await dbConnect();
    const session = await getServerSession(authOptions)
    try {

        let user = await User.findOne({ _id: session.user._id })

        let profileComplete = false;

        if (user) {
            let candidate = await Candidate.findOne({ user_id: session.user._id })

            if (candidate) {


                 const  appliedjob=await Applyjob.countDocuments({candidate_id: candidate._id})

                const jobbookmark = await Jobbookmark.countDocuments({ candidate_id: candidate._id })


                profileComplete = Object.values(candidate).every(field => field !== undefined && field !== '');
             
             
             
                return NextResponse.json({ profileComplete, jobbookmark, appliedjob })

            } else {

                return NextResponse.json({ err: profileComplete })



            }





        } else {



            return NextResponse.json({ err: "user not found" })




        }





    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message })
    }




}




