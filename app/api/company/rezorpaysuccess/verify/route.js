import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"
import { getServerSession } from "next-auth/next";
import { v4 as uuidv4 } from "uuid"
import { authOptions } from "@/utils/authOptions";
import Plan from "@/models/plans";
import Razorpay from 'razorpay'

import Orders from "@/models/orders";
import Company from "@/models/companies";

import Userplan from "@/models/user_plans"

var razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});




export async function POST(req) {

    await dbConnect();
    const body = await req.json()
    const { razorpay_payment_id } = body

    const session = await getServerSession(authOptions)
    try {

        const payment = await razorpay.payments.fetch(razorpay_payment_id)
        // console.log("payment"  , payment)

        const value = payment.amount

        const currencyCode = payment.currency

        const PlanId = payment.notes.userId
        const plan = await Plan.findOne({ _id: PlanId }).sort({ createdAt: -1 })

        const company = await Company.findOne({ user_id: session.user._id })

        console.log("company", company)
        console.log("plan", plan)



        if (payment && payment.status === "captured") {
            console.log("payment captured")

            const orders = await Orders.create({
                comapny_id: company._id,
                plan_id: plan?._id,
                package_name: plan?.leble,
                transaction_id: payment.id,
                order_id: uuidv4(),
                payment_provider: "Rozarpay",
                amount: value / 100,
                paid_in_currency: currencyCode,
                default_amount: plan?.price,
                payment_status: "paid",

            })


            let userplan = await Userplan.findOne({ company_id: company._id })

            if (!userplan) {

                userplan = await Userplan.create({
                    company_id: company._id,
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
            console.log("payment verificatiom faield  ", payment)


        }




        return NextResponse.json({ 'success': "payment success" }, { status: 200 })


        //    return NextResponse.json(order)

    } catch (err) {
        console.log("payment", err)


        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}

