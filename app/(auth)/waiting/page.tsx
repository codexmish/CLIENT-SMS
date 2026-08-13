import React from "react";
import Heading from "../_components/Heading";
import { Card } from "@/components/ui/card";
import { RotateCwFadingClock } from "lucide-react";
import Link from "next/link";

const WaitingForApproval = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="w-full max-w-100 flex flex-col items-center">
          <div className="w-15 h-15 rounded-2xl flex items-center justify-center bg-gray-200 text-5xl font-bold ">
            <RotateCwFadingClock />
          </div>

          <Card className="px-10 py-10 mt-10 flex flex-col items-center justify-center gap-5">
            <Heading text="Registration Pending" />
            <p className="text-base text-black font-popppins font-normal text-center">
              Your account is waiting for administrator approval. You will
              receive an email once your account is active.
            </p>
            <Link
              className="w-full h-8 bg-black rounded-2xl text-base text-white font-popppins font-semibold flex items-center justify-center"
              href={"/signin"}
            >
              Go Back to Signin
            </Link>
          </Card>
        </div>
      </div>
    </>
  );
};

export default WaitingForApproval;
