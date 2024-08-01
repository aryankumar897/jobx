import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Orders from "@/models/orders";


export async function GET(req, context) {
    await dbConnect();
    try {
        console.log("xxxxx", context.params.id)
        const orders = await Orders.find({ order_id: context.params.id }).sort({ createdAt: -1 })
            .populate('company_id')
            .populate('plan_id');

        console.log("cityxxxxx", orders);
        return NextResponse.json(orders);
    } catch (err) {
        return NextResponse.json(err.message, { status: 500 });
    }
}