
import mongoose from "mongoose"

import plan from "./plans"
import Company from "./companies"

const OrderSchema = new mongoose.Schema({


    company_id: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"

    },

    plan_id: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Plan"

    },



    package_name: {
        type: String,
        required: true,

    },
    transaction_id: {
        type: String,
        required: true,

    },


    order_id: {
        type: String,
        required: true,

    },


    payment_provider: {
        type: String,
        required: true,

    },


    amount: {
        type: String,
        required: true,

    },



    paid_in_currency: {
        type: String,
        required: true,

    },



    default_amount: {
        type: String,
        required: true,

    },

    payment_status: {
        type: String,
        enum: ['paid', "unpaid"]

    },


}, { timestamps: true })



export default mongoose.models.Order || mongoose.model('Order', OrderSchema)