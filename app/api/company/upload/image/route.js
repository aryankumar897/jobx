import { NextResponse } from "next/server";
import cloudinary from "cloudinary"

cloudinary.config({

  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,

  api_key: process.env.CLOUDINARY_API_KEY,

  api_secret: process.env.CLOUDINARY_API_SECRET


})





export async function POST(req) {

  const { logo } = await req.json();


  try {

    const result = await cloudinary.uploader.upload(logo)

    console.log(result)

    return NextResponse.json({
      public_id: result.public_id,
      secure_url: result.secure_url

    })



  } catch (error) {
    console.log(err)
  }


}

export async function PUT(req) {

  const { public_id } = await req.json();


  try {

    const result = await cloudinary.uploader.destroy(public_id)

    console.log(result)

    return NextResponse.json({
      success: true,

    })



  } catch (error) {
    console.log(err)
  }


}
