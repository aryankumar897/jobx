import mongoose from 'mongoose';


const CountrySchema = new mongoose.Schema({


    name: {


        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 40,
        unique: true


    }




}, { timestamps: true })



export default mongoose.models.Country || mongoose.model("Country", CountrySchema);