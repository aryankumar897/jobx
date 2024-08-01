import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Skill from "@/models/skill";
import slugify from "slugify";

export async function PUT(req, context) {
    await dbConnect()

    const body = await req.json();

    try {

        const updatingSkill = await Skill.findByIdAndUpdate(


            context.params.id,
            { ...body, slug: slugify(body.name) },

            { new: true }


        )



        return NextResponse.json(updatingSkill)



    } catch (err) {


        return NextResponse.json({ err: err.message }, { status: 500 })



    }




}


export async function DELETE(req, context) {


    await dbConnect();
    try {

        const deletingSkill = await Skill.findByIdAndDelete(context.params.id)

        return NextResponse.json(deletingSkill)
    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })


    }


}