"use server";

export const forgetPasswordActions = async (
  prevState: Boolean,
  formData: FormData,
) => {
  try {
    const email = formData.get("email");

    const bodyPayload = {
      email,
    };

    const res = await fetch(`${process.env.BACKEND_API_URL}/auth/forgetpass`, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyPayload),
    });

    const result = await res.json();

    return result;
  } catch (error) {
    
    console.log(error);
    return error;
  }
};
