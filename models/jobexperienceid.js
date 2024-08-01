
import mongoose from "mongoose"




const Jobexperience_idSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minLength: 3
        ,
        maxLength: 40
    },


    slug: {
        type: String,
        required: true,
        trim: true,


    }



}, { timestamp: true })



export default mongoose.models.Jobexperience_id || mongoose.model('Jobexperience_id', Jobexperience_idSchema)