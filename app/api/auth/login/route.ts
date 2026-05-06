import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (username === "admin" && password === "KPS2020") {
      const response = NextResponse.json({ success: true });
      
      // En producción usar jwt firmado, acá simulamos token
      const token = "demo_kps_token_" + Date.now();
      
      response.cookies.set({
        name: "kps-demo-session",
        value: token,
        httpOnly: true,
        path: "/",
        domain: ".techinsurance.com.ar", // Cross-domain cookie
        sameSite: "lax",
        maxAge: 60 * 60 * 24 // 24 hours
      });

      // También setteamos para localhost para que funcione en desarrollo
      response.cookies.set({
        name: "kps-demo-session-dev",
        value: token,
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        maxAge: 60 * 60 * 24
      });

      return response;
    }

    return NextResponse.json({ error: "Credenciales incorrectas" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: "Error en login" }, { status: 500 });
  }
}
