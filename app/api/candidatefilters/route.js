import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import Candidate from "@/models/candidate";

import queryString from "query-string";
export  async function GET(req){


await dbConnect()

 const searchParams=queryString.parseUrl(req.url).query;
  const {country,state,city,skill}=searchParams||{};

try{

 const  filter={};
 if(country){
    filter.country=country
 }
    if (state) {
        filter.state = state

    }

    if (city) {
        filter.city = city

    }

    if (skill) {
        filter.skill_id = {$in:[skill]}

    }



const candidate=await Candidate.find(filter)
.populate("country")
.populate("state")
.populate("city")

console.log(candidate)
return NextResponse.json(candidate)


}catch(err){



   console.log(err) 
    return NextResponse.json({ err: err.message }, { status: 500 });
}

}
