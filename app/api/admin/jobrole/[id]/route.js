import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Jobrole from "@/models/jobrole";
import slugify from "slugify";


export async function PUT(req, context) {
    await dbConnect()

    const body = await req.json();
 console.log(body);
    try {

        const updatingJobrole = await Jobrole.findByIdAndUpdate(


            context.params.id,
            { ...body, slug: slugify(body.name) },

            { new: true }


        )



        return NextResponse.json(updatingJobrole)



    } catch (err) {

  console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 })



    }




}


export async function DELETE(req, context) {


    await dbConnect();
    try {

        const deletingJobrole = await Jobrole.findByIdAndDelete(context.params.id)

        return NextResponse.json(deletingJobrole)
    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })


    }


}