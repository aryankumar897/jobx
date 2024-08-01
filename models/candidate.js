import mongoose from 'mongoose';

import User from "./user";

import Industry from "./industry";

import Organization from './organization';
import Team from "./team";
import Profession from "./profession"
import City from "./city";
import State from "./state";

import Country from "./country";



const CandidateSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    // experience_id: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Experience",
    // }],

    profession_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profession",
    }],


    experience_lable: {
        type: 'String',
        required: true,

    },


    skill_id: [{
        type: String

    }],







    image: {

        public_id: {

            type: String,
            default: "",
            required: true,


        },

        secure_url: {

            type: String,
            default: "",
            required: true,


        }




    },


    title: {

        type: String,
        required: true,
        trim: true,


    },


    full_name: {

        type: String,
        required: true,
        trim: true,
    },



    slug: {

        type: String,
        required: true,

    },


    email: {

        type: String,
      
    

    },

    phone_one: {
        type: String,
   

    },

    phone_two: {
        type: String,
   

    },


    birth_date: {
        type: Date,
    },

    website: {
        type: String,
    },


    cv: {
        type: String,
    },


    bio: {
        type: String,
    },

    gender: {
        type: String,
        enum: ['male', 'female'],
    },


    marital_status: {
        type: String,
        enum: ['married','single'],

    },


    address: {
        type: String,
    },



    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
    },


    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "State",
    },


    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Country",
    },




    status: {


        type: String,
        enum: ["avaibale", "not available"],

    },


    profile_completion: {

        type: Boolean,
        default: false,

    },



    visibility: {

        type: Boolean,
        default: false,

    }




}, { timestamps: true })




export default mongoose.models.Candidate || mongoose.model("Candidate", CandidateSchema)
