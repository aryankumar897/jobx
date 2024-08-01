import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/blog";

export async function GET(req) {

    await dbConnect();
  
    //  console.log("heloo")
    try {
      

        const blogs = await Blog.find({})
      
           
            .limit(3)
            .sort({ createdAt: -1 });


        return NextResponse.json(
            blogs,
         
        );
    } catch (err) {
        return NextResponse.json(
            {
                err: err.message,
            },
            { status: 500 }
        );
    }
}