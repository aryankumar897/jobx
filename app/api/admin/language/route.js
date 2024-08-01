import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Language from "@/models/language";
import slugify from "slugify";


export async function GET(req) {

    await dbConnect();


    try {


        const language = await Language.find({}).sort({ createdAt: -1 })

        return NextResponse.json(language)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}




export async function POST(req) {

    await dbConnect();
    const body = await req.json();

    const { name } = body;


    try {


        const language = await Language.create({ name, slug: slugify(name) })

        return NextResponse.json(language)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })
    }



}