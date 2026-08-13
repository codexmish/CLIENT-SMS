"use server";

import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redirect } from "next/navigation";

export const signinAction = async (prevState: Boolean, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const bodyPayload = {
    email,
    password,
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/auth/signin`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyPayload),
  });

  const result = await res.json();

  // ------setting token on cookies
  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    });
  }

  // -----decoding jwt token
  const decodedData = jwt.decode(result.data.accessToken) as JwtPayload;

  if (decodedData.role === "ADMIN") {
    redirect("/adminDashboard");
  }

  if (decodedData.role === "TEACHER") {
    redirect("/teacherDashboard");
  }

  if (decodedData.role === "STUDENT") {
    redirect("/studentDashboard");
  }

  return result;
};
