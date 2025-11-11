// app/api/register/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    console.log("Received data:", data);

    const newUser = new User(data);
    await newUser.save();

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("REGISTER ERROR:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
