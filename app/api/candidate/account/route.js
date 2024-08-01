import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";



import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import Candidate from "@/models/candidate";

export async function POST(req) {
    const body = await req.json();



    const {

        country,
        state,
        city,
        phone_one,
        phone_two,
        address,
        email

    } = body;



    console.log({

        country,
        state,
        city,
        phone_one,
        phone_two,
        address,
        email

    })


    await dbConnect();
    const session = await getServerSession(authOptions);

    try {
        // console.log(_req);

        let candidate = await Candidate.findOne({ user_id: session.user._id });

        //   console.log("company", education)

        if (candidate) {

            candidate.country = country || candidate.country;

            candidate.state = state || candidate.state;


            candidate.city = city || candidate.city;

            candidate.address = address || candidate.address;

            candidate.phone_one = phone_one || candidate.phone_one;
            candidate.phone_two = phone_two || candidate.phone_two;
            candidate.email = email || candidate.email;
            //console.log("experience==>", education)

            await candidate.save();
            return NextResponse.json(candidate);
        } else {


            let candidate = await Candidate.findOne({ user_id: session.user._id });

            console.log("candidate ", candidate);
            if (candidate) {


                const candidate = await Candidate.create({

                    country,
                    state,
                    city,
                    phone_one,
                    phone_two,
                    address,
                    email

                });



                //   console.log(experience);

                return NextResponse.json(candidate);

            }



            return NextResponse.json(
                {
                    err: "user not found",
                },
                { status: 404 }
            );

        }




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



export async function GET(req) {
    await dbConnect();
    const session = await getServerSession(authOptions);
    try {

        const candidate = await Candidate.findOne({ user_id: session.user._id })

        return NextResponse.json(
            candidate
        );
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            {
                err: err.message,
            },
            { status: 500 }
        );
    }
}