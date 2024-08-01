
import mongoose from "mongoose"




const SalarySchema = new mongoose.Schema({

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



export default mongoose.models.Salarytype || mongoose.model('Salarytype', SalarySchema)