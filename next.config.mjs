/** @type {import('next').NextConfig} */
//import config from "./config.js";

const nextConfig = {
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
        DB_PASSWORD: process.env.DB_PASSWORD,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
    }
};

export default nextConfig; 
