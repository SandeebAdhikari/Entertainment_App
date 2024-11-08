import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("API called"); // Add logging here

    const { name, email, password } = await req.json();
    console.log("Received data:", { name, email, password });

    await connectToDatabase();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Create a new user
    const newUser = new User({ name, email, password });
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
