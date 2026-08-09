"use server";

export const signupAction = async (prevState: Boolean, formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const bodyPayload = {
    name,
    email,
    password,
  };

  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/auth/signup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyPayload),
    });

    const result = await res.json();

    // console.log(result);
    return result
    
  } catch (error) {
    console.log(error);
  }
};
