import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Industry from "@/models/industry";
import slugify from "slugify";

export async function PUT(req, context) {
    await dbConnect()

    const body = await req.json();

    try {

        const updatingIndustry = await Industry.findByIdAndUpdate(


            context.params.id,
            { ...body, slug: slugify(body.name) },

            { new: true }


        )



        return NextResponse.json(updatingIndustry)



    } catch (err) {


        return NextResponse.json({ err: err.message }, { status: 500 })



    }




}


export async function DELETE(req, context) {


    await dbConnect();
    try {

        const deletingIndustry = await Industry.findByIdAndDelete(context.params.id)

        return NextResponse.json(deletingIndustry)
    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })


    }


}