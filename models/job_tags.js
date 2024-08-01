import mongoose from "mongoose";


import Tag from "./tags"

const Job_tagSchema = new mongoose.Schema({
    job_id: {

        type: String,
        required: true,
    },
    tag_id: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
    }]




}, { timestamps: true })


export default mongoose.models.Jobtag || mongoose.model("Jobtag", Job_tagSchema)
