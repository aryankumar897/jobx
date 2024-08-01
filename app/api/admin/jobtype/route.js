import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Jobtype from "@/models/job_type";
import slugify from "slugify";


export async function GET(req) {

    await dbConnect();


    try {


        const      jobtype= await Jobtype.find({}).sort({ createdAt: -1 })

        return NextResponse.json(jobtype)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}




export async function POST(req) {

    await dbConnect();
    const body = await req.json();

    const { name } = body;


    try {


        const jobtype = await Jobtype.create({ name, slug: slugify(name) })

        return NextResponse.json(jobtype)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })
    }



}