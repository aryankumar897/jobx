
import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";


import Orders from "@/models/orders";

export async function GET() {


    await dbConnect();


    try {

        const orders= await Orders.find({})

         
          
        console.log("kk===================",  orders)

        return NextResponse.json(orders)


    } catch (err) {

        console.log(err)

        return NextResponse.json({ err: err.message }, { status: 500 });
    }


}

