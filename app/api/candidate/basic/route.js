import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import User from "@/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import Candidate from "@/models/candidate";
import slugify from "slugify";




export async function POST(req) {



    const body = await req.json()

    await dbConnect()

    const session = await getServerSession(authOptions)


    try {




        const { full_name, title, birth_date, image, cv, website, experience_lable } = body
        console.log({ full_name, title, birth_date, image, cv, website, experience_lable })

    
        let candidate = await Candidate.findOne({ user_id: session.user._id })

        if (candidate) {

            candidate.full_name = full_name || candidate?.full_name;
            candidate.experience_lable = experience_lable || candidate?.experience_lable;
            candidate.title = title || candidate?.title;
            candidate.slug = slugify(title) || candidate?.slug
            candidate.birth_date = birth_date || candidate?.birth_date;
            candidate.website = website || candidate?.website;
            candidate.image = image || candidate?.image;
            candidate.cv = cv || candidate?.cv;
            await candidate.save()
            return NextResponse.json(candidate)
        } else {

            const candidate = await Candidate.create({

                full_name, title, birth_date, 
                image, cv,
                 website, experience_lable,

                slug: slugify(title),
                user_id: session.user._id

            })


        }


 console.log(candidate)

        return NextResponse.json({msg:"successully registred"},{status:200})

    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message },{status:500})
    }



}






export  async function GET(req){


await dbConnect()
const  session = await  getServerSession(authOptions)


try {
    
const  candidate=await Candidate.findOne({user_id: session.user._id})


 return NextResponse.json(candidate)


} catch (error) {
    console.log(err)
    return NextResponse.json({ err: err.message }) 
}

}