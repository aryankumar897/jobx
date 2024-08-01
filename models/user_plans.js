import mongoose from "mongoose"
import Plan from "./plans"

import Company from "./companies"



const UserplanSchema = new mongoose.Schema({

    company_id: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"


    },





    plan_id: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Plan"


    },
    job_limit: {

        type: Number,
        required: true,



    },


    featured_job_limit: {

        type: Number,
        required: true,



    },






    highlight_job_limit: {

        type: Number,
        required: true,



    },






    profile_verify: {
        type: Number,
        default: 0,


    },







}, { timestamps: true })




export default mongoose.models.Userplan || mongoose.model("Userplan", UserplanSchema)
