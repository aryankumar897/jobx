import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import slugify from "slugify";
import Blog from "@/models/blog";


export async function POST(req) {

    const _req = await req.json()
    await dbConnect()

    try {

        const blog = await Blog.create({

            ..._req,
            slug: slugify(_req.title)

        })

        return NextResponse.json(blog)
    } catch (err) {
        console.log(err)

        return NextResponse.json({ err: err.message }, { status: 500 });
    }


}


 export async function GET(){


     await dbConnect()

     try {

         const blogs=await Blog.find({}).limit(3)

         return NextResponse.json(blogs)
     } catch (err) {
         console.log(err)

         return NextResponse.json({ err: err.message }, { status: 500 });
     }




 }

