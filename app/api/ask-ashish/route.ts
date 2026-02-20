import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const backendResponse = await fetch(
      `${process.env.RAG_API_URL}/api/v1/chat/ask`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.RAG_API_KEY || "",
        },
        body: JSON.stringify(body),
      },
    );

    const data = await backendResponse.json();

    return NextResponse.json(data, {
      status: backendResponse.status,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "PROXY_ERROR",
        message: "Failed to connect to Ask Ashish service",
      },
      { status: 500 },
    );
  }
}
