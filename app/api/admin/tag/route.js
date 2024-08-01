import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Tag from "@/models/tags";
import slugify from "slugify";


export async function GET(req) {

    await dbConnect();


    try {


        const tag = await Tag.find({}).sort({ createdAt: -1 })

        return NextResponse.json(tag)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}




export async function POST(req) {

    await dbConnect();
    const body = await req.json();

    const { name } = body;


    try {


        const tag = await Tag.create({ name, slug: slugify(name) })

        return NextResponse.json(tag)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })
    }



}