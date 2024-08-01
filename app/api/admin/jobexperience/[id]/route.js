
import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Jobexperience_id from "@/models/jobexperienceid";
import slugify from "slugify";


export async function PUT(req, context) {
    await dbConnect()

    const body = await req.json();

    try {

        const updatingJobexperience_id = await Jobexperience_id.findByIdAndUpdate(


            context.params.id,
            { ...body, slug: slugify(body.name) },

            { new: true }


        )



        return NextResponse.json(updatingJobexperience_id)



    } catch (err) {


        return NextResponse.json({ err: err.message }, { status: 500 })



    }




}


export async function DELETE(req, context) {


    await dbConnect();
    try {

        const deletingJobexperience_id = await Jobexperience_id.findByIdAndDelete(context.params.id)

        return NextResponse.json(deletingJobexperience_id)
    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })


    }


}