import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import User from "@/model/User";
import bcrypt from "bcrypt"; 

export async function POST(req){
    await dbConnect();
    const body = await req.json();
    const { username, email, password } = body;

    try {
       await new User({
        username, 
        email,
        password: await bcrypt.hash(password, 10)
       }).save();
       return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
    } catch (err) {
        if (err.code === 11000 && err.keyPattern && err.keyPattern.username) {
            return NextResponse.json({ err: "Username already exists." }, { status: 400 });
        }
        console.log(err);
        return NextResponse.json({ err: err.message }, { status: 500 });
    }
}
