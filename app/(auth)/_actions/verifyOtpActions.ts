"use server";

import { redirect } from "next/navigation";

export const verifyOtpActions = async (
  prevState: Boolean,
  formData: FormData,
) => {
  const email = formData.get("email");
  const otp = formData.get("otp");

  const bodyPayload = {
    email,
    otp,
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/auth/otp-verify`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyPayload),
  });

  const result = await res.json();
  if (result.data?.email) {
    redirect("/waiting");
  }

  return result;
};
