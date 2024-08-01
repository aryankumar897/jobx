
import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";
import Country from "@/models/country";


export async function PUT(req, context) {

    await dbConnect()

    const body = await req.json();
    try {


        const updatingCountry = await Country.findByIdAndUpdate(

            context.params.id,
            { ...body },
            { new: true }

        )


        return NextResponse.json(updatingCountry)


    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 })
    }



}






 export  async function DELETE(req, context) {

await dbConnect()

try {

const  deletingCountry = await Country.findByIdAndDelete(
context.params.id

)


return NextResponse.json(deletingCountry)



    
} catch (err) {
    

    return NextResponse.json({ err: err.message }, { status: 500 })




}



 }


