// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;





//const config = require("./config");
import config from "./config.js";
/** @type {import('next').NextConfig} */

//⨯ MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined".




const nextConfig={
   



    env: {
        DB_URI: config.DB_URI  ,
        NEXTAUTH_SECRET:config.NEXTAUTH_SECRET ,
     API:config.API,


        CLOUDINARY_CLOUD_NAME   :   config.CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_API_KEY   : config.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET   :config.CLOUDINARY_API_SECRET,

   RAZORPAY_KEY_ID: config.RAZORPAY_KEY_ID,
        RAZORPAY_KEY_SECRET :config.RAZORPAY_KEY_SECRET,
DOMAIN: config.DOMAIN 

    },
};

export default nextConfig;

