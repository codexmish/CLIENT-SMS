import Link from "next/link";
import React from "react";
import LoginForm from "../_components/LoginForm";
import Heading from "../_components/Heading";

const SignIn = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <Heading text="Sign In" />
        <div className="w-full max-w-100 mt-10">
          <LoginForm />
        </div>
        <div className="text-base text-black font-popppins font-light mt-4">
          <p className="text-center">Already have an account?</p>
          <div className="flex items-center space-x-3 mt-5">
            <Link
              className="text-lg cursor-pointer text-white bg-black h-10 px-4 rounded-2xl flex items-center justify-center"
              href={"/signup"}
            >
              SignUp
            </Link>

            <Link
              className="text-lg cursor-pointer text-white bg-black h-10 px-4 rounded-2xl flex items-center justify-center"
              href={"/forgetpassword"}
            >
              Forget password
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
