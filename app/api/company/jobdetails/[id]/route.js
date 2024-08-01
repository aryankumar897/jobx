import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Jobs from "@/models/jobs";
import Company from "@/models/companies"
import slugify from "slugify";
import User from "@/models/user"
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/utils/authOptions";
import jobexperienceid from "@/models/jobexperienceid";
import educationid from "@/models/educationid";
import Jobtag from "@/models/job_tags";

import Jobskill from "@/models/job_skills";

import Benfits from "@/models/benfits";
import Job_benfits from "@/models/job_benfits";


export async function GET(req, context) {

    await dbConnect()

    try {

        const jobs = await Jobs.findOne({ _id: context.params.id }).sort({ createdAt: -1 })


     //   console.log(jobs)

        const job_tag = await Jobtag.findOne({ job_id: jobs._id })

        const benfit = await Benfits.findOne({ company_id: jobs?.company_id })

        const job_skills = await Jobskill.findOne({
            job_id: jobs._id
        })



       // console.log("benfitfindxxxxx  by company", { benfit, job_skills, job_tag, jobs })
        return NextResponse.json({ benfit, job_skills, job_tag, jobs })




    } catch (err) {
        return NextResponse.json({ err: err.message })

    }



}