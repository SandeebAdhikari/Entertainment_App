import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("API called");

    const { name, username, email, password } = await req.json();
    console.log("Received data:", { name, username, email, password });

    await connectToDatabase();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const newUser = new User({ name, username, email, password });
    await newUser.save();

    console.log("User registered successfully");
    return NextResponse.json(
      { message: "User registered successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
