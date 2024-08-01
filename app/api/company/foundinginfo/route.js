import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";
import Company from "@/models/companies";

import slugify from "slugify";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

export async function POST(req) {

    const body = await req.json()


    const {

        startDate,
        email,
        selectedCountry,
        selectedState,
        selectedCity,
        selectedIndustry,
        selectedOrganization,
        selectedTeam,
        map, address, website, contact



    } = body


   
    await dbConnect();

    const session = await getServerSession(authOptions)

    try {

        const companyUpdate = {

            email,
            country: selectedCountry,
            state: selectedState,
            city: selectedCity,
            industry_type_id: selectedIndustry,
            organization_type_id: selectedOrganization,
            team_type_id: selectedTeam,
            map_link: map,
            address,
            website,
            phone: contact,
            establishment_date: startDate,

        }
        const updatedUser = await Company.findOneAndUpdate(
            { user_id: session.user._id },
            companyUpdate, { new: true, upsert: true }


        )


        return NextResponse.json(updatedUser)




    } catch (err) {
        return NextResponse({ err: err.message }, { status: 500 });
    }



}



export async function GET(){


await dbConnect();

const  session=await  getServerSession(authOptions)

try {
    const  company =await Company.findOne({user_id:session.user._id}) 
         console.log(company)
 return NextResponse.json(company)



} catch (err) {
    return NextResponse.json({ err: err.message }, { status: 500 });  
}


}