import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Plan from "@/models/plans";



export async function GET(req) {

    await dbConnect();


    try {


        const plan = await Plan.find({}).sort({ createdAt: -1 })

        return NextResponse.json(plan)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}




export async function POST(req) {

    await dbConnect();
    const body = await req.json();

    const {

        leble,
        price,
        joblimit,
        highlightjoblimit,
        featuredjoblimit,
        recommended,
        frontendshow,
        profileverify, home



    } = body;


    try {


        const plan = await Plan.create({


            leble,
            price,
            joblimit,
            highlightjoblimit,
            featuredjoblimit,
            recommended,
            frontendshow,
            profileverify,
            home




        })

        return NextResponse.json(plan)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })
    }



}