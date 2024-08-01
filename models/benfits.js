import mongoose from "mongoose";


import Company from "./companies";


const benfits_Schema = new mongoose.Schema({
    company_id: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
   name: {

       type:Array,
       required:true
    }




}, { timestamps: true })


export default mongoose.models.Benfits || mongoose.model("Benfits", benfits_Schema)
