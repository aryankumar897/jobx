import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"
import { getServerSession } from "next-auth/next";
import { v4 as uuidv4 } from "uuid"
import { authOptions } from "@/utils/authOptions";
import Plan from "@/models/plans";
import Stripe from "stripe";
import Orders from "@/models/orders";
import Company from "@/models/companies";

import Userplan from "@/models/user_plans"


const stripeInstance = new Stripe("sk_test_51K5nvYSGgs9C5RdZpIIhINkUXAcMb46wbwGbJiGGWlt2VXjXhjP6wQerucW9lc3AUDCoMZ3ArV3zLIMxCQRSI24100pNDDDSew");



export async function POST(req) {

    await dbConnect();
    const body = await req.json()
    const {sessionid } = body

    const session = await getServerSession(authOptions)
    try {

        const stripesession = await stripeInstance.checkout.sessions.retrieve(sessionid)
     
     
     
        console.log("stripesession ", stripesession)

        const value = stripesession?.amount_total;

        const currencyCode = stripesession?.currency; 

        const sess = stripesession?.metadata?.product_id 
        const plan = await Plan.findOne({ _id: sess }).sort({ createdAt: -1 })

        const company = await Company.findOne({ user_id: session?.user?._id })

        console.log("company", company)
        console.log("plan", plan)



        if (   stripesession&&stripesession?.payment_status === "paid") {
            console.log("payment captured")

            const orders = await Orders.create({
                company_id: company?._id,
                plan_id: plan?._id,
                package_name: plan?.leble,
                transaction_id: sess,
                order_id: uuidv4(),
                payment_provider: "Stripe",
                amount: value ,
                paid_in_currency: currencyCode,
                default_amount: plan?.price,
                payment_status: "paid",

            })

            console.log("orders",  orders)
            let userplan = await Userplan.findOne({ company_id: company?._id })

            if (!userplan) {

                userplan = await Userplan.create({
                    company_id: company?._id,
                    plan_id: plan?._id,
                    profile_verified: plan?.profileverify,
                    job_limit: plan?.joblimit,
                    featured_job_limit: plan?.featuredjoblimit,
                    highlight_job_limit: plan?.highlightjoblimit,
                })


            } else {


                userplan.plan_id = plan?._id
                userplan.profile_verified = plan?.profileverify
                userplan.job_limit += plan?.joblimit
                userplan.featured_job_limit += plan?.featuredjoblimit
                userplan.highlight_job_limit += plan?.highlightjoblimit



            }

            await userplan.save()

        } else {

            return NextResponse.json({ failed: "payment  faield try again" }, { status: 500 })
          


        }




        return NextResponse.json({ 'success': "payment success" }, { status: 200 })


        //    return NextResponse.json(order)

    } catch (err) {
        console.log("payment", err)


        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}
