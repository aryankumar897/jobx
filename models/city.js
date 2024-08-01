import mongoose from "mongoose"

import State from "./state"
import Country from "./country"


const CitySchema = new mongoose.Schema({

    name: {

        type: String,
        required: true,

        trim: true,
        minLength: 3,
        maxLength: 40,




    },

    state_Id: {


        type: mongoose.Schema.Types.ObjectId,
        ref: "State"

    },


    country_Id: {


        type: mongoose.Schema.Types.ObjectId,
        ref: "Country"

    },






}, { timestamps: true })




export default mongoose.models.City || mongoose.model("City", CitySchema)
