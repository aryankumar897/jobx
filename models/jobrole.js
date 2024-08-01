
import mongoose from "mongoose"




const JobroleSchema = new mongoose.Schema({

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



export default mongoose.models.Jobrole || mongoose.model('Jobrole', JobroleSchema)