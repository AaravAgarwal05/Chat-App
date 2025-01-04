import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      status: 200,
      message: "User logged out",
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
