
import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Tag from "@/models/tags";
import slugify from "slugify";

export async function PUT(req, context) {
    await dbConnect()

    const body = await req.json();

    try {

        const updatingTag = await Tag.findByIdAndUpdate(


            context.params.id,
            { ...body, slug: slugify(body.name) },

            { new: true }


        )



        return NextResponse.json(updatingTag)



    } catch (err) {


        return NextResponse.json({ err: err.message }, { status: 500 })



    }




}


export async function DELETE(req, context) {


    await dbConnect();
    try {

        const deletingTag = await Tag.findByIdAndDelete(context.params.id)

        return NextResponse.json(deletingTag)
    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })


    }


}