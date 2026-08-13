import React from "react";
import ForgetPassForm from "../_components/ForgetPassForm";
import Heading from "../_components/Heading";

const ForgetPassword = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <Heading text="Find my account" />
        <div className="w-full max-w-100 mt-10">
          <ForgetPassForm />
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
