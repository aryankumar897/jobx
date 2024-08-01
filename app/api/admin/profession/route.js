import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Profession from "@/models/profession";
import slugify from "slugify";


export async function GET(req) {

    await dbConnect();


    try {


        const profession = await Profession.find({}).sort({ createdAt: -1 })

        return NextResponse.json(profession)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}




export async function POST(req) {

    await dbConnect();
    const body = await req.json();

    const { name } = body;


    try {


        const profession = await Profession.create({ name, slug: slugify(name) })

        return NextResponse.json(profession)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })
    }



}