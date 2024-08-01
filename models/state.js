import mongoose from "mongoose"

import Country from "./country"



const StateSchema = new mongoose.Schema({

    statename: {

        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 40,
        unique: true,


    },


    countryId: {


        type: mongoose.Schema.Types.ObjectId,
        ref: "Country"


    }







}, { timestamps: true })


export default mongoose.models.State||mongoose.model("State",StateSchema)