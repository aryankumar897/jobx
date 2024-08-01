import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Salarytype    from "@/models/salarytype";
import slugify from "slugify";

export async function PUT(req, context) {
    await dbConnect()

    const body = await req.json();

    try {

        const updatingSalarytype = await Salarytype.findByIdAndUpdate(


            context.params.id,
            { ...body, slug: slugify(body.name) },

            { new: true }


        )



        return NextResponse.json(updatingSalarytype)



    } catch (err) {


        return NextResponse.json({ err: err.message }, { status: 500 })



    }




}


export async function DELETE(req, context) {


    await dbConnect();
    try {

        const deletingSalarytype = await Salarytype.findByIdAndDelete(context.params.id)

        return NextResponse.json(deletingSalarytype)
    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })


    }


}