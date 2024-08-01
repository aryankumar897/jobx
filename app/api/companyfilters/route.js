import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Company from "@/models/companies";



import queryString from "query-string";

export async function GET(req) {
    await dbConnect();

    const searchParams = queryString.parseUrl(req.url).query;
    const { country, state, city, organization_type_id, industry_type_id } = searchParams || {};

    try {

        const filter = {};

        if (organization_type_id) {
            filter.organization_type_id = organization_type_id

        }



        if (industry_type_id) {
            filter.industry_type_id = industry_type_id

        }




        if (country) {
            filter.country = country
        }
        if (state) {
            filter.state = state

        }

        if (city) {
            filter.city = city

        }



        const company = await Company.find(filter)
            .populate("organization_type_id")
            .populate("industry_type_id")
            .populate("country")
            .populate("state")
            .populate("city")
        // console.log("companyxxxx=>", company)
        return NextResponse.json(
            company
        );
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            {
                err: err.message,
            },
            { status: 500 }
        );
    }
}