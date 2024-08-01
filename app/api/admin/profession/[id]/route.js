import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Profession from "@/models/profession";
import slugify from "slugify";

export async function PUT(req, context) {
    await dbConnect()

    const body = await req.json();

    try {

        const updatingProfession = await Profession.findByIdAndUpdate(


            context.params.id,
            { ...body, slug: slugify(body.name) },

            { new: true }


        )



        return NextResponse.json(updatingProfession)



    } catch (err) {


        return NextResponse.json({ err: err.message }, { status: 500 })



    }




}


export async function DELETE(req, context) {


    await dbConnect();
    try {

        const deletingProfession = await Profession.findByIdAndDelete(context.params.id)

        return NextResponse.json(deletingProfession)
    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })


    }


}