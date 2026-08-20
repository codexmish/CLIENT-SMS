"use server";

export const forgetPasswordAction = async (
  prevState: Boolean,
  formData: FormData,
) => {
  const email = formData.get("email");

  const bodyPayload = {
    email,
  };
  console.log("bodypayload", bodyPayload);

  const res = await fetch(`${process.env.BACKEND_API_URL}/auth/forgetpass`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyPayload),
  });

  const result = await res.json();

  return result;
};
