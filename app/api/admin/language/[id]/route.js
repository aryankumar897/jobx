import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Language from "@/models/language";
import slugify from "slugify";

export async function PUT(req, context) {
    await dbConnect()

    const body = await req.json();

    try {

        const updatingLanguage = await Language.findByIdAndUpdate(


            context.params.id,
            { ...body, slug: slugify(body.name) },

            { new: true }


        )



        return NextResponse.json(updatingLanguage)



    } catch (err) {


        return NextResponse.json({ err: err.message }, { status: 500 })



    }




}


export async function DELETE(req, context) {


    await dbConnect();
    try {

        const deletingLanguage = await Language.findByIdAndDelete(context.params.id)

        return NextResponse.json(deletingLanguage)
    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })


    }


}