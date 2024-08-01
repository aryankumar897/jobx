import { NextResponse } from "next/server"

import dbConnect from "@/utils/dbConnect"

import SiteSettings from "@/models/sitesettings";


export async function POST(req) {

    const body = await req.json()




    await dbConnect()


    try {

        let paypalSettingsDoc = await SiteSettings.findOne()

        if (!paypalSettingsDoc) {

            paypalSettingsDoc = new SiteSettings()
        }

        for (const [key, value] of Object.entries(body)) {

            paypalSettingsDoc.settings[key] = value
        }



        paypalSettingsDoc.markModified("settings")


        await paypalSettingsDoc.save()
        return NextResponse.json({ success: true })

    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 })

    }





}



export async function GET() {




    await dbConnect()

    try {
        const paymentsettings = await SiteSettings.findOne({})

        return NextResponse.json(paymentsettings)




    } catch (err) {

        console.log(err)
        return NextResponse.json({ err: err.message }, { status: 500 })



    }



}