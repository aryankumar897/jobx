import mongoose from "mongoose";


import Benfits from "./benfits";
import Jobs from "./jobs";

const jobbenfit_Schema = new mongoose.Schema({
    job_id: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Jobs"
    },
    benfits_id: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Benfits"
    }




}, { timestamps: true })


export default mongoose.models.Job_benfits || mongoose.model("Job_benfits", jobbenfit_Schema)
