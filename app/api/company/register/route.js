import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";
import Company from "@/models/companies";

import slugify from "slugify";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";



export async function POST(req) {

    await dbConnect();
    const body = await req.json();
    const { name, bio, vision, logo, banner } = body

    console.log({ name, bio, vision, logo, banner })

    const session = await getServerSession(authOptions)

    try {

        let company = await Company.findOne({ user_id: session.user._id })

        if (company) {
            company.name = name || company?.name;
            company.slug = slugify(name) || company?.slug;

            company.bio = bio || company?.bio
            company.vision = vision || company?.vision;
            company.logo = logo || company?.logo
            company.banner = banner || company?.banner

            await company.save();
            return NextResponse.json(company)



        } else {

            const company = await Company.create({
                name, bio, vision, logo, banner,
                slug: slugify(name),
                user_id: session.user._id


            })
            return NextResponse.json(company)


        }

    } catch (err) {
        return NextResponse.json({ err: err.message })
    }

}




export async function GET(req) {

    await dbConnect();

    const session = await getServerSession(authOptions);
    try {

        const company = await Company.findOne({ user_id: session.user._id })

        return NextResponse.json(company)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }

}