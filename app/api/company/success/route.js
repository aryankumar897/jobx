


import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import { v4 as uuidv4 } from 'uuid';
import User from "@/models/user";
import Plan from "@/models/plans";
import Orders from "@/models/orders";
import Company from "@/models/companies";
import Userplan from "@/models/user_plans"
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";


import paypal from '@paypal/checkout-server-sdk';
let environment = new paypal.core.SandboxEnvironment("AceW9nJb3-RlOq1F9qpl40eCvABcWpTtxCO5rTu47RpdFOoAiQGJSRRKqAPVodkMWTUbVCAyNpBRaZDL",
    "EHGdvjb7JZ2dnhivVEyI_LAJPEWLxOzkxcFkcivqc_HH4nnqUbcYscfqVsOLwxbqiFY7OqHMJkluJoT0"
);
let client = new paypal.core.PayPalHttpClient(environment);



export async function POST(req) {

    await dbConnect();
    const session = await getServerSession(authOptions);
    const body = await req.json();
   // console.log(body)
    const { token, payerId } = body;

    try {
      
            const request = new paypal.orders.OrdersCaptureRequest(token);
            request.requestBody({});

            const response = await client.execute(request);

         const refrence= response?.result?.purchase_units[0].reference_id

        const currencyCode = response?.result?.purchase_units[0].payments?.captures[0].amount?.currency_code;
        const value = response?.result?.purchase_units[0].payments?.captures[0].amount?.value;


        const plan = await Plan.findOne({ _id: refrence }).sort({ createdAt: -1 });
        const company = await Company.findOne({ user_id: session.user._id })
        console.log("companyc", company);
        console.log("planxxx", plan);
        console.log("planlable",plan&& plan.leble);
        console.log('Payment verified:', response.result);


        if (response?.result?.status === 'COMPLETED') {


        const orders = await Orders.create({
           
            company_id: company._id,
            plan_id: plan?._id,
            package_name:plan?.leble,
           
            transaction_id: response?.result?.id,
            order_id: uuidv4(),
            payment_provider:"Paypal",
            amount:value,   //after some calcution get value from  payapal
            paid_in_currency: currencyCode,
            default_amount:plan?.price, //default is plan price
            payment_status:"paid",

        });


            let userplan = await Userplan.findOne({ company_id: company._id });

            if (!userplan) {
                // If no document is found, create a new one
                userplan = await Userplan.create({
                    company_id: company._id,
                    plan_id: plan?._id,
                    profile_verified: plan?.profileverify,
                    job_limit: plan?.joblimit,
                    featured_job_limit: plan?.featuredjoblimit,
                    highlight_job_limit: plan?.highlightjoblimit
                });
            } else {
                userplan.plan_id=plan?._id, 
               userplan.profile_verified =plan?.profileverify,
             userplan.job_limit +=plan?.joblimit;
                userplan.featured_job_limit +=plan?.featuredjoblimit;
                userplan.highlight_job_limit +=plan?.highlightjoblimit;
            }

            await userplan.save();
           


    }else{

            return NextResponse.json({faild : "payment failed try again" });

    }




        // Respond with success message
      //  console.log("user created => ");
        return NextResponse.json({ success: response.result });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ err: err.message }, { status: 500 });
    }
}










