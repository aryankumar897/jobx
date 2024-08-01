import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Plan from "@/models/plans";

import paypal from '@paypal/checkout-server-sdk';



let environment = new paypal.core.SandboxEnvironment("AceW9nJb3-RlOq1F9qpl40eCvABcWpTtxCO5rTu47RpdFOoAiQGJSRRKqAPVodkMWTUbVCAyNpBRaZDL",
    "EHGdvjb7JZ2dnhivVEyI_LAJPEWLxOzkxcFkcivqc_HH4nnqUbcYscfqVsOLwxbqiFY7OqHMJkluJoT0"
);
let client = new paypal.core.PayPalHttpClient(environment);





export async function POST(req, context) {
    await dbConnect();
    try {

        // console.log("hello", context.params.id)

        const plan = await Plan.findOne({ _id: context.params.id }).sort({ createdAt: -1 });
        // console.log("planxx", plan)
        // console.log("planxx", plan._id)
        // console.log("planxx", plan.price)


        if (!plan) {
            return NextResponse.json({ error: "plan not found" });
        }




        const request = new paypal.orders.OrdersCreateRequest();
        request.prefer("return=representation");
        request.requestBody({
            application_context: {
                return_url: 'http://localhost:3000/dashboard/company/success',
                cancel_url: 'http://localhost:3000/dashboard/company/cancel',
            },



            intent: 'CAPTURE',
            purchase_units: [{
                reference_id: plan && plan?._id,
                amount: {
                    currency_code: 'USD',
                    value: plan && plan?.price
                },

            }]
        });






        const order = await client.execute(request);
        //  res.json({ id: order.result.id });
        console.log('order===>', order.result.links)
        return NextResponse.json({ id: order?.result.links[1].href });
    } catch (err) {
        console.log("err=>", err)
        return NextResponse.json(err.message, { status: 500 });
    }
}

//sb-drhne26200129@personal.example.com