import { NextResponse } from "next/server";
import { signOut } from "@/src/server/serverActions";

export async function GET() {
  try {
    const response = await signOut();
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
