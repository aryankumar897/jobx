import mongoose from "mongoose"


import Candidate from "./candidate"

const CandidateEducationSchema = new mongoose.Schema({

    candidate_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate"
    },

    level: {

        type: String,
        required: true,
        trim: true,

    },


    degree: {

        type: String,
        required: true,
        trim: true,

    },





    year: {

        type: String,

        trim: true,

    },

  

   notes: {

        type: String,
        required: true,
        trim: true,

    },







}, { timestamps: true })




export default mongoose.models.Education || mongoose.model("Education", CandidateEducationSchema)
