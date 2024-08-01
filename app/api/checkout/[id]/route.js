import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Plan from "@/models/plans";
import slugify from "slugify";





export async function GET(req, context) {
    await dbConnect();
    try {

        //console.log("hello", context.params.id)



        const plan = await Plan.find({ _id: context.params.id }).sort({ createdAt: -1 });

        // console.log("plansssss",plan)

        return NextResponse.json(plan);
    } catch (err) {
        return NextResponse.json( {err:  err.message}, { status: 500 });
    }
}