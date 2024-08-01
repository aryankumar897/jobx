import mongoose from "mongoose";


import Skill from "./skill";
import Jobs from "./jobs";

const Skill_Schema = new mongoose.Schema({
    job_id: {

        type: mongoose.Schema.Types.ObjectId,
        ref:"Jobs"
    },
    skill_id:[ {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill"
    }]




}, { timestamps: true })


export default mongoose.models.Jobskill || mongoose.model("Jobskill", Skill_Schema)
