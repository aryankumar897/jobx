
import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";


import City from "@/models/city";

export async function GET() {


    await dbConnect();


    try {

        const city = await City.find({})
        
            .populate("state_Id")
            .populate("country_Id")
             .sort({ createdAt: -1 })


        return NextResponse.json(city)


    } catch (err) {

        console.log(err)

        return NextResponse.json({ err: err.message }, { status: 500 });
    }


}




export async function POST(req) {

    await dbConnect()

    const body = await req.json()

    const { name, selectedCountryId, selectedStateId } = body


    try {


        const city = await City.create({
            name,

            country_Id: selectedCountryId,
            state_Id: selectedStateId



        })

        console.log(city)
        return NextResponse.json(city)

    } catch (err) {


        console.log(err)

        return NextResponse.json({ err: err.message }, { status: 500 });


    }








}