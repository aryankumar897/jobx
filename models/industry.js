import mongoose from 'mongoose';



const IndustrySchema = new mongoose.Schema({

    name: {

        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 50,

    }
    ,

    slug: {

        type: String,
        required: true,
        trim: true,
        unique: true

    }



}, { timestamps: true })



export default  mongoose.models.Industry ||mongoose.model("Industry",IndustrySchema)
