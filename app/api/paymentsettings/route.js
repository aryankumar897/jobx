import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Paymentsettings from "@/models/paymentsettings";





export async function GET() {




    await dbConnect()

    try {
        const paymentsettings = await Paymentsettings.findOne({})

        return NextResponse.json(paymentsettings)




    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 })



    }



}