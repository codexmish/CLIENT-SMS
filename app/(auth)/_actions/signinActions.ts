"use server";

export const signinAction = async (prevState: Boolean, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const bodyPayload = {
    email,
    password,
  };

  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/auth/signin`, {
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
