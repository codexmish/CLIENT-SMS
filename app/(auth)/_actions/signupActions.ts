"use server";

import { redirect } from "next/navigation";

export const signupAction = async (prevState: Boolean, formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const bodyPayload = {
    name,
    email,
    password,
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/auth/signup`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyPayload),
  });

  const result = await res.json();

  if (result.success) {
    redirect(`/verifyotp?email=${result.data.email}`);
  }
  return result;
};
