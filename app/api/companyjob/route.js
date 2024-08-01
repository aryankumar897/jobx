import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Jobs from "@/models/jobs";


export async function POST(req) {


    await dbConnect()

    const body = await req.json()
    const { id } = body

    try {

        const currentDate = new Date();

        const jobs = await Jobs.find({
            company_id: id,
            status: "active",
            deadline: { $gte: currentDate }

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

       // console.log("jobsx", jobs)
        return NextResponse.json(jobs)

    } catch (err) {
        return NextResponse.json({ err: err.message })
    }


}

