import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/blog";


export async function GET(req, context) {
    await dbConnect();
    // console.log("single page")

    try {
        const blog = await Blog.findOne({ _id: context?.params?.slug })
    

        const letest = await Blog.find({}).sort({ createdAt: -1 });

        if (!blog) {

            return NextResponse.json(
                {
                    err: "events not found",
                },
                { status: 500 }
            );

        }

  console.log(blog)
      
        return NextResponse.json( blog );
    } catch (err) {

        console.log(err)
        return NextResponse.json(
            {
                err: err.message,
            },
            { status: 500 }
        );
    }
}