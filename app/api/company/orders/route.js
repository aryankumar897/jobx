
import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";


import Orders from "@/models/orders";

import Company from "@/models/companies"

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

export async function GET() {


    await dbConnect();


    try {

 const session = await getServerSession(authOptions)
let company = await Company.findOne({user_id:session?.user?._id})




        const orders = await Orders.find({company_id:company?._id})



        console.log("kk===================", orders)

        return NextResponse.json(orders)


    } catch (err) {

        console.log(err)

        return NextResponse.json({ err: err.message }, { status: 500 });
    }


}

