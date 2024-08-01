import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Jobs from "@/models/jobs";
import queryString from "query-string";

export async function GET(req) {


    await dbConnect()

    const searchParams = queryString.parseUrl(req.url).query;
    const { country, state, city, minSalary, maxSalary, job_category_id } = searchParams || {};


    try {



        const filter = {};


        if (job_category_id) {
            filter.job_category_id= job_category_id;

        }

        if (minSalary && maxSalary) {
            filter.custom_salary = {
                $gte: minSalary,
                $lte: maxSalary,

            }


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



        const currentDate = new Date();

        const jobs = await Jobs.find({

            status: "active",

            deadline: { $gte: currentDate },
            ...filter
        })
            .populate("job_category_id", "name")
            .populate("company_id")
            .populate("job_role_id")
            .populate("jobexperienceid")
            .populate("educationid")
            .populate("job_type_id")
            .populate("salary_type_id")
            .populate("country")
            .sort({ createdAt: -1 })

        console.log("job", jobs)
        return NextResponse.json(jobs)

    } catch (err) {
        return NextResponse.json({ err: err.message })
    }


}

