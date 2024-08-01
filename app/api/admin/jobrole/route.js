
import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Jobrole from "@/models/jobrole";
import slugify from "slugify";


export async function GET(req) {

    await dbConnect();


    try {


        const jobrole = await Jobrole.find({}).sort({ createdAt: -1 })

        return NextResponse.json(jobrole)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}




export async function POST(req) {

    await dbConnect();
    const body = await req.json();

    const { name } = body;


    try {


        const jobrole = await Jobrole.create({ name, slug: slugify(name) })

        return NextResponse.json(jobrole)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })
    }



}