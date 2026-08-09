import React from "react";
import RegisterForm from "../_components/RegisterForm";

const SignupPage = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="w-full max-w-100 ">
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default SignupPage;
