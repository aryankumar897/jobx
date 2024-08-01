
import mongoose from "mongoose"




const JobcatSchema = new mongoose.Schema({


    icon: {
        type: String,
        required: true,


    },



    name: {
        type: String,
        required: true,
        trim: true,

        minLength: 3
        ,
        maxLength: 40
    },


    slug: {
        type: String,
        required: true,
        trim: true,
        unique: true,

    }



}, { timestamp: true })



export default mongoose.models.Jobcategory || mongoose.model('Jobcategory', JobcatSchema)