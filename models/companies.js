import mongoose from 'mongoose';

import User from "./user";

import Industry from "./industry";

import Organization from './organization';
import Team from "./team";

import City from "./city";
import State from "./state";

import Country from "./country";



const CompanySchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    industry_type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Industry",
    },

    organization_type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
    },


    team_type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
    },

    name: {
        type: String,
        required: true,
        trim: true,
    },

    slug: {

        type: String,
        required: true,
        unique: true,
        index: true,

    },
    email: {
        type: String,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
    },

    phone: {
        type: String,
        trim: true,
    },


    logo: {

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



    banner: {

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


    establishment_date: {

        type: Date,
    },



    website: {

        type: String,

    },



    bio: {

        type: String,

    },




    vision: {

        type: String,

    },




    total_views: {

        type: Number,
        default: 0,

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


    map_link: {
        type: String,

    },

    is_profile_verified: {

        type: Boolean,
        default: false,

    },



    document_verified_at: {


        type: Date,
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




export default mongoose.models.Company || mongoose.model("Company", CompanySchema)
