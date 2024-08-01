import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import JobType from "@/models/job_type";
import slugify from "slugify";

export async function PUT(req, context) {
    await dbConnect()

    const body = await req.json();

    try {

        const updatingJobType = await JobType.findByIdAndUpdate(


            context.params.id,
            { ...body, slug: slugify(body.name) },

            { new: true }


        )



        return NextResponse.json(updatingJobType)



    } catch (err) {


        return NextResponse.json({ err: err.message }, { status: 500 })



    }




}


export async function DELETE(req, context) {


    await dbConnect();
    try {

        const deletingJobType = await JobType.findByIdAndDelete(context.params.id)

        return NextResponse.json(deletingJobType)
    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })


    }


}