import { NextResponse, NextRequest } from "next/server";
import { updateUserImageURL } from "@/server/serverActions";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, fileName } = reqBody;
    const response = await updateUserImageURL(email, fileName);
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
