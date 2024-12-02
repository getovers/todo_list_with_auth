import {NextResponse} from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import User from "/models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const {username, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 12);
        const existingUser = await User.findOne({username});

        if (existingUser) {
            return NextResponse.json(
                {message: "Username already in use."},
                {status: 409} // conflict status
            );
        }  else {
            await connectMongoDB();
            await User.create({username, password: hashedPassword});
        }


        return NextResponse.json({message: `User registered: ${username}`}, {status: 201});

    } catch {
        return NextResponse.json({message: "An error occured while registering the user"}, {status: 500});
    }
}