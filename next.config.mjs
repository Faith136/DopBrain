/** @type {import('next').NextConfig} */
import config from "./config.js";

const nextConfig = {
    env: {
        MONGODB_URI: config.MONGODB_URI,
        DB_PASSWORD: config.DB_password,
        NEXTAUTH_SECRET: config.NEXTAUTH_SECRET
    }
};

export default nextConfig; 
