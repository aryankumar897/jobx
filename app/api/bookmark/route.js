import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";




import Jobbookmark from "@/models/jobbookmark";

export async function GET(req) {
    await dbConnect();
  





    try {


        const bookmark = await Jobbookmark.find({})


        return NextResponse.json(bookmark);
    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 });
    }
}



