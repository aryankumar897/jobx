import mongoose from "mongoose"

import User from "./user"
import Language from "./language"
import Candidate from "./candidate"

const CandidatelangSchema = new mongoose.Schema({

    candidate_id: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate"



    },




    lang_id:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Language",
        required: true,
    }],






}, { timestamps: true })




export default mongoose.models.Candidatelang || mongoose.model("Candidatelang", CandidatelangSchema)
