import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";

import Company from "@/models/companies"
import Jobs from "@/models/jobs"
import Order from "@/models/orders"
import Applyjob from "@/models/applyjob";
import Jobbookmark from "@/models/jobbookmark"





export async function GET() {


    await dbConnect()

    try {

        const companycount = await Company.countDocuments({})
        const orderscount = await Order.countDocuments({})

        const pendingjobcount = await Jobs.countDocuments({ status: "pending" })


        const activejobcount = await Jobs.countDocuments({ status: "active" })

   
        const appliedjob = await Applyjob.countDocuments({})
        const jobbookmark = await Jobbookmark.countDocuments({})


        console.log({
            companycount,
             pendingjobcount,
            orderscount ,
            activejobcount,
      

            appliedjob,
            jobbookmark

        })

        return NextResponse.json({
            companycount, pendingjobcount,

            activejobcount,
            orderscount ,

            appliedjob ,
            jobbookmark

        })
    } catch (err) {
        console.log(err)

        return NextResponse.json({ err: err.message }, { status: 500 });
    }




}

