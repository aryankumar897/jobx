import { NextResponse } from "next/server";
import Stripe from "stripe";
import dbConnect from "@/utils/dbConnect";
import Plan from "@/models/plans";

const stripeInstance = new Stripe("sk_test_51K5nvYSGgs9C5RdZpIIhINkUXAcMb46wbwGbJiGGWlt2VXjXhjP6wQerucW9lc3AUDCoMZ3ArV3zLIMxCQRSI24100pNDDDSew");

export async function POST(req, context) {
    await dbConnect();

    try {
        const plan = await Plan.findOne({ _id: context.params.id }).sort({ createdAt: -1 });

        const sessions = await stripeInstance.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'INR', // Ensure the currency is INR
                        product_data: {
                            name: plan.leble, // Make sure 'leble' is the correct field name for the plan label
                        },
                        unit_amount: plan.price * 100, // Convert price to smallest currency unit
                    },
                    quantity: 1,
                }
            ],
            mode: 'payment',
          
            success_url: 'http://localhost:3000/dashboard/company/stripe/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'http://localhost:3000/dashboard/company/stripe/cancel',
            metadata: {
                product_id: plan._id.toString()
            },
         
         
            
           
        });

        console.log(sessions);

        return NextResponse.json({ id: sessions.url });

    } catch (err) {
        console.log(err);
        return NextResponse.json({ err: err.message }, { status: 500 });
    }
}



//https://docs.stripe.com/testing#international-cards