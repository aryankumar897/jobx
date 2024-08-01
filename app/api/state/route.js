import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import State from "@/models/state";




export async function POST(req){

await dbConnect();
const body=await req.json();
 const  {countryId}=body
 console.log(countryId);
try {
    const state = await State.find({ countryId:    countryId}).sort({createdAt:-1})
 console.log("xxxx",   state)


     return NextResponse.json(state)




} catch (error) {
    return NextResponse.json({ err: err.message }, { status: 500 });
}






}















export async function GET() {

    await dbConnect()
    try {


        const state = await State.find({}).sort({ createdAt: -1 })
        return NextResponse.json(state)

    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 });

    }


}