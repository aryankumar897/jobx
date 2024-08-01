import User from "@/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import Candidate from "@/models/candidate";
import Experience from "@/models/candidateexperience"
import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";


export async function DELETE(req, context) {




    await dbConnect()





    try {

        const deleteEx = await Experience.findByIdAndDelete(
            context.params.id

        )
        console.log(deleteEx)

        return NextResponse.json(deleteEx)
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

        const updateEx = await Experience.findByIdAndUpdate(
            context.params.id,
            {
                ...body
            },

            { new: true }
        )

        console.log(updateEx)
        return NextResponse.json(updateEx)

    } catch (err) {
        console.log(err)
        return NextResponse.json({ err: err.message })
    }



}
