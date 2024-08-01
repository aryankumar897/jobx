import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"



import State from "@/models/state"


export async function PUT(req, context) {


    await dbConnect()
    const body = await req.json()
    try {

        const updatingState = await State.findByIdAndUpdate(
            context.params.id
            ,
            { ...body },
            { new: true }


        )

        return NextResponse.json(updatingState)





    } catch (err) {

        return NextResponse({ err: err.message }, { status: 500 })
   
   
    }

}




 export async function DELETE(req, context) {


await dbConnect()

try {
    

const deleteingState=await State.findByIdAndDelete(context.params.id)

 return NextResponse.json(deleteingState)

} catch (err) {
    return NextResponse({ err: err.message }, { status: 500 })

}

 }