import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Candidateskill from "@/models/candidateskill";
import Candidate from "@/models/candidate"

import Expericence from "@/models/candidateexperience";
import Education from "@/models/education"

import Candidatelang from "@/models/candidatelanguage";


export async function GET(req, context) {

    await dbConnect()
    try {

 const  candidate=await Candidate.findOne({slug:context.params.slug})
 .populate("country","name")
 .populate("profession_id","name")


const candidateskill=await Candidateskill.find({candidate_id:candidate._id})
.populate("skill_id","name")

        const candidateLanguage = await Candidatelang.find({ candidate_id: candidate._id })
            .populate("lang_id", "name")



        const experience = await Expericence.find({candidate_id:candidate._id})

const  education=await Education.find({candidate_id:candidate._id})

        console.log({ candidate, candidateskill, candidateLanguage, experience, education })
        return NextResponse.json({ candidate, candidateskill, candidateLanguage, experience, education })




    } catch (err) {
  console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}