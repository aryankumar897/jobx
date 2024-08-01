
import mongoose from "mongoose"




const EducationidSchema = new mongoose.Schema({

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



export default mongoose.models.Educationids || mongoose.model('Educationids', EducationidSchema)