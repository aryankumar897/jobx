

import CredentialsProvider from "next-auth/providers/credentials";


import User from "@/models/user";
import bcrypt from 'bcrypt'

import dbConnect from "@/utils/dbConnect";



export const authOptions = {

    session: {
        strategy: "jwt",


    },
    providers: [
        CredentialsProvider({

            async authorize(credentials, req) {

                await dbConnect()
                const { email, password } = credentials;

                const user = await User.findOne({ email })
                if (!user?.password) {

                    throw new Error("please login   via  the method to use sign in")
                }


                const isPasswordMatch = await bcrypt.compare(password, user.password)


                if (!isPasswordMatch) {

                    throw new Error("invalid  email and password")
                }

                return user


            }



        })

    ],




    callbacks: {

        jwt: async ({ token }) => {
 //console.log("jwt token:" ,token)
            const userByemail = await User.findOne({ email: token.email })
            userByemail.password = undefined;
           
            token.user = userByemail;

          //  console.log("jwt tokenby  email:", token)
            return token;


        },
        session: async ({ session, token }) => {
            session.user = token.user;
            return session;
        }



    },

    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    }





}