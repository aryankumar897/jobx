import mongoose from "mongoose"


import Candidate from "./candidate"

const CandidateExperienceSchema = new mongoose.Schema({

    candidate_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate"
    },

    company: {

        type: String,
        required: true,
        trim: true,

    },


    department: {

        type: String,
        required: true,
        trim: true,

    },



    designation: {

        type: String,
        required: true,
        trim: true,

    },


    start: {

        type: Date,

        trim: true,

    },

    end: {

        type: Date,

        trim: true,

    },

    responsibilities: {

        type: String,
        required: true,
        trim: true,

    },


    currently_working: {

        type: Boolean,
        default: false,

    }




}, { timestamps: true })




export default mongoose.models.Experience || mongoose.model("Experience", CandidateExperienceSchema)
