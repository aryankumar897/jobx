import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Team from "@/models/team";

import slugify from "slugify";




export async function PUT(req, context) {

    await dbConnect()
    const body = await req.json();


     console.log(body)
    try {

        const updatingTeam = await Team.findByIdAndUpdate(


            context.params.id,
            { ...body, slug: slugify(body.name) },
            { new: true }

        )


        return NextResponse.json(updatingTeam)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })
    }



}





export  async function DELETE(req, context) {

    await dbConnect();


try {
    
const deletingTeam = await Team.findByIdAndDelete(
context.params.id

)



    return NextResponse.json(deletingTeam)



} catch (err) {
    return NextResponse.json({ err: err.message }, { status: 500 })
}





}




