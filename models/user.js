import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name: {

        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 20

    },
    email: {

        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,

        lowercase: true,
    },



    password: {

        type: String,
        required: true,
    },



    role: {


        type: String,
        enum: ['candidate', 'company', 'admin'],

        default: "candidate",
        required: 'true'

    }






}, { timestamps: true })



export default mongoose.models.User || mongoose.model("User", UserSchema)