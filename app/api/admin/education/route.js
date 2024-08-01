import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Educationids  from "@/models/educationid";
import slugify from "slugify";


export async function GET(req) {

    await dbConnect();


    try {


        const educationids = await Educationids.find({}).sort({ createdAt: -1 })

        return NextResponse.json(educationids)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}




export async function POST(req) {

    await dbConnect();
    const body = await req.json();

    const { name } = body;


    try {


        const educationids = await Educationids.create({ name, slug: slugify(name) })

        return NextResponse.json(educationids)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })
    }



}