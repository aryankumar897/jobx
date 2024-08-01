import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";

import Blog from "@/models/blog";


export async function PUT(req, context) {
    await dbConnect()
    const body = await req.json()

    console.log("context?.params?.id", context?.params?.id)
    try {
        const updateblog = await Blog.findByIdAndUpdate(

            context?.params?.id,
            {
                ...body
            },

            { new: true }

        )
        return NextResponse.json(updateblog)
    } catch (err) {
        console.log(err)

        return NextResponse.json({ err: err.message }, { status: 500 });
    }


}






export async function DELETE(req, context) {
    await dbConnect()
    


    try {
      
 const  deleteblog = await Blog.findByIdAndDelete(context?.params?.id)


        return NextResponse.json(deleteblog)
    } catch (err) {
        console.log(err)

        return NextResponse.json({ err: err.message }, { status: 500 });
    }


}





//get single  page api  on  the basis of id
export async function GET(req,context) {


    await dbConnect()

    try {

        const blogs = await Blog.findOne({_id:context?.params?.id})

        return NextResponse.json(blogs)
    } catch (err) {
        console.log(err)

        return NextResponse.json({ err: err.message }, { status: 500 });
    }




}







