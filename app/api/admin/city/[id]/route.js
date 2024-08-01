
import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";


import City from "@/models/city";


export async function PUT(req, context) {

    await dbConnect()

    const body = await req.json()





    try {

        const updatingCity = await City.findByIdAndUpdate(

            context.params.id,

            { ...body }
            ,
            { new: true }

        )

        return NextResponse.json(updatingCity)





    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}



export async function DELETE(req, context) {

    await dbConnect()
    try {


        const deletingCity = await City.findByIdAndDelete(

            context.params.id

        )


        return NextResponse.json(deletingCity)


    } catch (error) {
        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 })
    }





}