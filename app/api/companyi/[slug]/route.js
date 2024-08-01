import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Company from "@/models/companies";

export async function GET(req, context) {
    await dbConnect();

    try {
        const company = await Company.findOne({ slug: context.params.slug })
            .populate("country", "name ")
            .populate("state", "statename ")
            .populate("industry_type_id", "name")
            .populate("organization_type_id", "name")
            .populate("team_type_id", "name")
            .populate("city", "name ")
        
             console.log("x",company)


        return NextResponse.json(company);
    } catch (err) {
        return NextResponse.json(
            {
                err: err.message,
            },
            { status: 500 }
        );
    }
}