import Heading from "../_components/Heading";
import RegisterForm from "../_components/RegisterForm";
import Link from "next/link";

const SignupPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <Heading text="Sign Up" />
        <div className="w-full max-w-100 mt-10">
          <RegisterForm />
        </div>
        <div className="flex gap-1 items-center text-base text-black font-popppins font-light mt-4">
          <p>Dont have an account</p>
          <Link
            className="text-lg cursor-pointer text-blue-400"
            href={"/signin"}
          >
            SignIn
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
