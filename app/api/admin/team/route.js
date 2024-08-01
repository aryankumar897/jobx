import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Team from "@/models/team";

import slugify from "slugify";







export async function GET() {
    await dbConnect()

    try {

        const team = await Team.find({}).sort({ createdAt: -1 })

        return NextResponse.json(team)



    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 })


    }


}




export async function POST(req) {

    await dbConnect()
        ;
    const body = await req.json()

    const { name } = body


    try {


        const team = await Team.create({ name, slug: slugify(name) })



        return NextResponse.json(team)



    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })
    }






}