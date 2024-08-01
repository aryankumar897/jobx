import User from "@/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import Candidate from "@/models/candidate";
import Education from "@/models/education"
import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";


export async function DELETE(req, context) {




    await dbConnect()





    try {

        const deleteEdu = await Education.findByIdAndDelete(
            context.params.id

        )
        console.log(deleteEdu)

        return NextResponse.json(deleteEdu)
    } catch (err) {


        console.log(err)
        return NextResponse.json({ err: err.message })

    }



}




export async function PUT(req, context) {


    await dbConnect();

    const body = await req.json();
    console.log(body)
    try {

        const updateEdu = await Education.findByIdAndUpdate(
            context.params.id,
            {
                ...body
            },

            { new: true }
        )

        console.log(updateEdu)
        return NextResponse.json(updateEdu)

    } catch (err) {
        console.log(err)
        return NextResponse.json({ err: err.message })
    }



}
