import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Jobexperience_id from "@/models/jobexperienceid";
import slugify from "slugify";


export async function GET(req) {

    await dbConnect();


    try {


        const jobexperience_id = await Jobexperience_id.find({}).sort({ createdAt: -1 })

        return NextResponse.json(jobexperience_id)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}




export async function POST(req) {

    await dbConnect();
    const body = await req.json();

    const { name } = body;


    try {


        const jobexperience_id = await Jobexperience_id.create({ name, slug: slugify(name) })

        return NextResponse.json(jobexperience_id)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })
    }



}