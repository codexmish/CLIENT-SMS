import React from "react";
import Heading from "../_components/Heading";
import ForgetPassForm from "../_components/ForgetPassForm";

const ForgetPassword = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <Heading text="search your account with email" />
        <div className="w-full max-w-100 mt-10">
          <ForgetPassForm />
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
