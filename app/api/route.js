import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Jobexperience_id from "@/models/jobexperienceid";
import slugify from "slugify";


export async function POST() {

    await dbConnect()
    try {






        const countries = [
          
            "Software Engineer",
            "Marketing Manager",
            "Data Analyst",
            "Product Designer",
            "Financial Analyst",
            "HR Specialist",
            "Sales Representative",
            "Graphic Designer",
            "Operations Manager",
            "Content Writer",
            "Software Developer",
            "Research Scientist",
            "UX/UI Designer",
            "Business Analyst",
            "Project Manager",
            "Content Strategist",
            "Quality Assurance Engineer",
            "Customer Success Manager",
            "Digital Marketing Specialist",
            "Operations Analyst"
        ];



        await Jobexperience_id.deleteMany({})

        const organization = await Jobexperience_id.insertMany(

            countries.map((name) => ({
                name,
                slug: slugify(name)


            }))



        )

console.log(organization)
        return NextResponse.json(organization)

    } catch (err) {
        return NextResponse.json(err.message)
    }






}