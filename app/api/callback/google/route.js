import { NextResponse } from "next/server";

export function GET(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  if (error) {
    return new NextResponse(`Google returned an error: ${error}`, {
      status: 400,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  if (!code) {
    return new NextResponse(
      [
        "No Google auth code was found in this request.",
        "",
        "This usually means you opened the callback URL directly.",
        "Go back and open the full Google authorization URL printed by:",
        "",
        "npm run gmail:auth",
        "",
        `Current URL: ${request.url}`,
      ].join("\n"),
      {
        status: 400,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      }
    );
  }

  return new NextResponse(
    [
      "Copy this code and paste it back into the terminal or chat:",
      "",
      code,
      "",
      "Then run:",
      `npm run gmail:auth -- ${code}`,
    ].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
}
