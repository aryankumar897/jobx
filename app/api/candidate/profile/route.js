import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import User from "@/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import Candidate from "@/models/candidate";
import slugify from "slugify";
import Candidatelang from "@/models/candidatelanguage";
import Candidateskill from "@/models/candidateskill";


export async function POST(req) {



    const body = await req.json()

    await dbConnect()

    const session = await getServerSession(authOptions)
    const {
        gender,
        maritalStatus,
        status,
        bio,
        selectedLanguages
        , selectedProfessions,
        selectedSkill } = body



    console.log({
        gender,
        maritalStatus,
        status,
        bio,
        selectedLanguages
        , selectedProfessions,
        selectedSkill
    })



    try {



        const profileUpdate = {



            gender,

            marital_status: maritalStatus,

            profession_id: selectedProfessions,
            status,
            skill_id: selectedSkill,
            bio


        }


        const updatedUser = await Candidate.findOneAndUpdate(
            { user_id: session?.user?._id },
            profileUpdate, {
            new: true, upsert: true,
        }


        )


        const skillUpdate = {
            skill_id: selectedSkill,
        }



        const languageUpdate = {
            lang_id: selectedLanguages
        }

        const updatedSkill = await Candidateskill.findOneAndUpdate(

            { candidate_id: updatedUser?._id },
            skillUpdate, {
            new: true, upsert: true
        }


    )


const updatedLanguage = await Candidatelang.findOneAndUpdate(

            { candidate_id: updatedUser?._id },
            languageUpdate, {
            new: true, upsert: true
        }


        )


        console.log({ updatedLanguage, updatedSkill, updatedUser })
        return NextResponse.json({ updatedLanguage, updatedSkill, updatedUser })

    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message })
    }



}









export async  function  GET(req){


await dbConnect()


const  session=await getServerSession(authOptions)

try {
    


 const  candidate=await Candidate.findOne({user_id:session?.user?._id})

    const language = await Candidatelang.find({candidate_id:candidate?._id})

    const skill = await Candidateskill.find({ candidate_id: candidate?._id })


    return NextResponse.json({ candidate, language, skill })


} catch (err) {
    console.log(err)
    return NextResponse.json({ err: err.message })
}





}