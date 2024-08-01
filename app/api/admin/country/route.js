



import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";
import Country from "@/models/country";


export async function GET() {

    await dbConnect();

    try {

        const country = await Country.find({}).sort({ createdAt: -1 })
        return NextResponse.json(country)




    } catch (err) {

        return NextResponse.json({ err: err.message }, { status: 500 })


    }

}




export async function POST(req) {

 await dbConnect();



 const body=await  req.json();

 const  {name}=body

try {
    

 const  country=await Country.create({name})


return NextResponse.json(country)

} catch (err) {
    return NextResponse.json({ err: err.message }, { status: 500 })
 
}






}