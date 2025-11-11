// app/api/register/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    // Connect to MongoDB using cached connection
    await dbConnect();

    // Parse incoming JSON data
    const data = await req.json();
    console.log("Received data:", data);

    // Check if email already exists
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already registered." },
        { status: 400 }
      );
    }

    // Create and save the new user
    const newUser = new User(data);
    await newUser.save();

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error in /api/register:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
