import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Organization from "@/models/organization";
import slugify from "slugify";




export async function GET() {

    await dbConnect()

    try {

        const organization = await Organization.find({}).sort({ createdAt: -1 })

        return NextResponse.json(organization)

    } catch (err) {


        return NextResponse.json({ err: err.message }, { status: 500 });




    }



}




export async function POST(req) {

    await dbConnect()
    const body = await req.json()

    const { name } = body;
 console.log(name)
    try {

        const organization = await Organization.create({ name, slug: slugify(name) })


        return NextResponse.json(organization)


    } catch (err) {
        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 });

    }





}