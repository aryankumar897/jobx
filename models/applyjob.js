import mongoose from "mongoose"

import Jobs from "./jobs"
import Candidate from "./candidate"


const applyjobSchema = new mongoose.Schema({


    candidate_id: {


        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate"

    },


    job_id: {


        type: mongoose.Schema.Types.ObjectId,
        ref: "Jobs"

    },






}, { timestamps: true })




export default mongoose.models.Applyjob || mongoose.model("Applyjob", applyjobSchema)
