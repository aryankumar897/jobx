import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Salarytype from "@/models/salarytype";
import slugify from "slugify";


export async function GET(req) {

    await dbConnect();


    try {


        const salary = await Salarytype.find({}).sort({ createdAt: -1 })

        return NextResponse.json(salary)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}




export async function POST(req) {

    await dbConnect();
    const body = await req.json();

    const { name } = body;


    try {


        const salary = await Salarytype.create({ name, slug: slugify(name) })

        return NextResponse.json(salary)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })
    }



}