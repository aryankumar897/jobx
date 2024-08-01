import mongoose from "mongoose"


const PlanSchema = new mongoose.Schema({

    leble: {

        type: String,
        required: true,

        trim: true,
        minLength: 3,
        maxLength: 40,

    },
    price: {

        type: Number,
        required: true,

        min: 0,

    },


    joblimit: {

        type: Number,
        required: true,



    },


    featuredjoblimit: {

        type: Number,
        required: true,



    },






    highlightjoblimit: {

        type: Number,
        required: true,



    },



    recommended: {

        type: Boolean,
        default: false,

    },


    frontendshow: {

        type: Boolean,
        default: false,

    },



    profileverify: {

        type: Boolean,
        default: false,

    },

    home: {

        type: Boolean,
        default: false,

    },





}, { timestamps: true })




export default mongoose.models.Plan || mongoose.model("Plan", PlanSchema)
