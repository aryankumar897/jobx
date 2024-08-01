import mongoose from 'mongoose';

import User from "./user";

import Company from "./companies"
import JobCategory from "./job_categories"
import jobrole from './jobrole';
import Jobexperience_id from './jobexperienceid';
import Educationids from './educationid';
import Jobtype from './job_type';
import Salarytype from './salarytype';
import City from './city';
import State from './state';
import Country from './country';


const JobsSchema = new mongoose.Schema({
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
    job_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Jobcategory"
    },
    job_role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Jobrole"
    },
    jobexperienceid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Jobexperience_id"
    },
    educationid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Educationids"
    },
    job_type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Jobtype"
    },
    salary_type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Salarytype"
    },

    title: {
        type: String,
        unique: true,
        required: true
    },

    slug: {
        type: String,
        unique: true,
        required: true
    },
    vacancies: {
        type: String,
        unique: true,
        required: true


    },
    min_salary: {
        type: Number,
        default: 0

    },
    max_salary: {
        type: Number,
        default: 0

    },

    custom_salary: {
        type: Number,
        default: 0

    },

    deadline: {
        type: Date,
    },


    description: {
        type: String,
    },
    status: {

        type: String,
        "enum": ["active", "expired", "pending"],
        default: "pending"

    },



    apply_on: {

        type: String,
        enum: ["app", "email", "custom_url"],
        default: "app"

    },


    apply_email: {
        type: String,
    },

    apply_url: {
        type: String,
    },

    fetaured: {
        type: Boolean,
        default: false,
    },
    highlight: {
        type: Boolean,
        default: false,
    },

fetaured_until:{
    type:Date,
},

highlight_until:{
    type: Date,

},


    jobcount:{
        type: Number,
        default: 0
    },
total_views:{

    type: Number,
    default: 0
},
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City"
    },
   state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "State"
    },

   country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Country"
    },

 address:{

    type:String,
 },


salary_mode:{
    type:String,

 enum:["range","custom"],
 default:"custom"

},


//  company_name:{
//     type:String,
//  }



}, { timestamps: true })

export default mongoose.models.Jobs || mongoose.model("Jobs", JobsSchema)
