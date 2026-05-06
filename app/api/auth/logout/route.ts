import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });
  
  response.cookies.delete("kps-demo-session");
  response.cookies.delete("kps-demo-session-dev");
  
  return response;
}
