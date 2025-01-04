import { NextResponse, NextRequest } from "next/server";
import { createUser } from "@/server/serverActions";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { fullName, username, email, password } = reqBody;
    const response = await createUser(fullName, username, email, password);
    console.log(response);
    return NextResponse.json({
      status: response.status,
      message: response.message,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        message: error.message,
        status: 500,
      });
    } else {
      return NextResponse.json({
        message: "An unknown error occurred",
        status: 500,
      });
    }
  }
}
