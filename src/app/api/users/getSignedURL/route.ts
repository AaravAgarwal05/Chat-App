import { NextRequest, NextResponse } from "next/server";
import { getSignedURL } from "@/server/serverActions";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { fileName } = reqBody;
    const response = await getSignedURL(fileName);
    return NextResponse.json({
      status: response.status,
      message: response.message,
      url: response.url,
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
