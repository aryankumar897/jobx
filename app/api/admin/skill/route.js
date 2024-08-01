import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Skill from "@/models/skill";
import slugify from "slugify";


export async function GET(req) {

    await dbConnect();


    try {


        const skill = await Skill.find({}).sort({ createdAt: -1 })

        return NextResponse.json(skill)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}




export async function POST(req) {

    await dbConnect();
    const body = await req.json();

    const { name } = body;


    try {


        const skill = await Skill.create({ name, slug: slugify(name) })

        return NextResponse.json(skill)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })
    }



}