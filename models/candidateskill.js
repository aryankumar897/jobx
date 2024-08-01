import mongoose from "mongoose"

import User from "./user"
import Skill from "./skill"
import Candidate from "./candidate"

const CandidateSkillSchema = new mongoose.Schema({

    candidate_id: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Candidate"
    },

  


    skill_id:[{


        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
        required:true,

    }],






}, { timestamps: true })




export default mongoose.models.Candidateskill || mongoose.model("Candidateskill", CandidateSkillSchema)
