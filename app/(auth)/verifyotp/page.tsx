import React from "react";
import OtpVerifyForm from "../_components/OtpVerifyForm";

const VerifyOTP = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="w-full max-w-100 ">
          <OtpVerifyForm />
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;
