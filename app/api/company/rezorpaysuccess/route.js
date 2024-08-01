import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import Plan from "@/models/plans";
import Razorpay from 'razorpay'
var razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {

    await dbConnect();
    const body = await req.json()
    const { id } = body
    try {


        const plan = await Plan.findOne({ _id: id }).sort({ createdAt: -1 })

        const options = {

            amount: plan.price * 100,  //amount in smallest currency unit
            currency: "INR",
            receipt: "donation_receipt",
            notes: {

                userId: id,

            }

        }

const  order=await razorpay.orders.create(options)

 console.log("order",order)

        return NextResponse.json(order)

    } catch (err) {
        return NextResponse.json({ err: err.message }, { status: 500 })

    }



}

