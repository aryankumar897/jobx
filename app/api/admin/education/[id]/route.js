
import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Educationids from "@/models/educationid";
import slugify from "slugify";







export async function PUT(req, context) {
    await dbConnect()

    const body = await req.json();

    try {

        const updatingEducationids = await Educationids.findByIdAndUpdate(


            context.params.id,
            { ...body, slug: slugify(body.name) },

            { new: true }


        )



        return NextResponse.json(updatingEducationids)



    } catch (err) {


        return NextResponse.json({ err: err.message }, { status: 500 })



    }




}


export async function DELETE(req, context) {


    await dbConnect();
    try {

        const deletingEducationids = await Educationids.findByIdAndDelete(context.params.id)

        return NextResponse.json(deletingEducationids)
    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })


    }


}