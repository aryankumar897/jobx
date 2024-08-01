import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import City from "@/models/city";


export async function POST(req) {
    await dbConnect();
    const body = await req.json();
    const { stateId } = body


    try {
        const city = await City.find({ state_Id: stateId }).sort({ createdAt: -1 });

 
        return NextResponse.json(city);
    } catch (err) {
        return NextResponse.json(err.message, { status: 500 });
    }
}









export async function GET() {

    await dbConnect()
    try {


        const city = await City.find({}).sort({ createdAt: -1 })
        return NextResponse.json(city)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}