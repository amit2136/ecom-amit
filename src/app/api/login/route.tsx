import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = "my-secret-key";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (email === "admin@example.com" && password === "123456") {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "7d" });

    const response = NextResponse.json(
      { success: true, message: "login succesfully" },
      {
        status: 200,
        headers: {
          "X-custom-header": "myHedaervalue",
        },
      }
    );

    response.cookies.set("authToken", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 60 * 7,
      path: "/",
    });

    return response;
  }
}
