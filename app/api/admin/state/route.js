import  {NextResponse} from  "next/server"

import dbConnect from "@/utils/dbConnect"



import State from "@/models/state"



export async function GET(){


await dbConnect()

try {
   
    
const state = await State.find({})  
.populate("countryId")
.sort({createdAt: -1})


 return  NextResponse.json(state)

} catch (err) {
    return  NextResponse.json({err:err.message},{status:500})



}


}




export async function POST(req){

await dbConnect()

const  body =await req.json()

const  {statename,selectedCountryId}=body
try {
    

    const state = await State.create({ statename, countryId: selectedCountryId })

 return NextResponse.json(state)

} catch (err) {
    return NextResponse.json({ err: err.message }, { status: 500 })


}




}