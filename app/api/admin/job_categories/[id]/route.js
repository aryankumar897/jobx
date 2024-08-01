import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Jobcategory from "@/models/job_categories";
import slugify from "slugify";




export async function PUT(req, context) {

    await dbConnect()
    const body = await req.json();

    try {

        const jobcat = await Jobcategory.findByIdAndUpdate(

            context.params.id,
            { ...body, slug: slugify(body.name) },
            { new: true }


        )

        return NextResponse.json(jobcat)


    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })


    }



}




export async function DELETE(req, context) {

    await dbConnect()

    try {

        const jobcat = await Jobcategory.findByIdAndDelete(context.params.id)

        return NextResponse.json(jobcat)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }

}