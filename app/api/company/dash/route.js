import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import User from "@/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import Company from "@/models/companies";
import Jobs from "@/models/jobs"
import Order from "@/models/orders"


export async function GET(){

    await dbConnect();
    const session = await getServerSession(authOptions)
    try {

        let user = await User.findOne({ _id: session.user._id })

        let profileComplete = false;

        if (user) {
            let company = await Company.findOne({ user_id: session.user._id })

            const pendingjob =await Jobs.countDocuments({company_id:company._id,status:"pending"})

 const orders=await Order.countDocuments({company_id:company._id})

            if (company) {

                profileComplete = Object.values(company).every(field => field !== undefined && field !== '');
               
                console.log({ profileComplete, pendingjob, orders })
                return NextResponse.json({ profileComplete, pendingjob, orders })

            } else {

                return NextResponse.json({ err: profileComplete })



            }





        } else {



            return NextResponse.json({ err: "user not found" })




        }





    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message })
    }




}




