import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Organization from "@/models/organization";
import slugify from "slugify";

export async function PUT(req, context) {
    await dbConnect()

    const body = await req.json();
     console.log("updatexx",body)

    try {

        const updatingOrganization = await Organization.findByIdAndUpdate(


            context.params.id,
            { ...body, slug: slugify(body.name) },

            { new: true }


        )



        return NextResponse.json(updatingOrganization)



    } catch (err) {


        return NextResponse.json({ err: err.message }, { status: 500 })



    }




}


export async function DELETE(req, context) {


    await dbConnect();
    try {

        const deletingOrganization = await Organization.findByIdAndDelete(context.params.id)

        return NextResponse.json(deletingOrganization)
    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })


    }


}