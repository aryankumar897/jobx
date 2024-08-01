import mongoose from "mongoose"



const BlogSchema = new mongoose.Schema({

    title: {

        type: String,
        required: true,

        trim: true,
        minLength: 3,
        maxLength: 40,
    },

   slug:{

       type: String,
       required: true,

   
    
   },

    description: {

        type: String,
        required: true,
text:true


    },
   image: {

        type: String,
     

    },

}, { timestamps: true })




export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema)
