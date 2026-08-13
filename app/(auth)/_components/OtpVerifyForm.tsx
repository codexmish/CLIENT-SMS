"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useActionState, useEffect } from "react";
import { verifyOtpActions } from "../_actions/verifyOtpActions";
import { toast } from "@/components/ui/toast";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";

const OtpVerifyForm = () => {
  const [state, action, pending] = useActionState(verifyOtpActions, false);
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(state);

    if (!state) return;

    if (!state.success) {
      toast.add({
        type: "Error",
        description: state.message,
      });
    }

    if (state.success) {
      toast.add({
        type: "success",
        description: state.message,
      });
    }
  }, [state]);

  return (
    <>
      <form action={action} className="flex flex-col gap-2">
        <Card className="px-8 py-8">
          {/* ----email */}
          <Input
            name="email"
            type="email"
            labelName="Email"
            errMsg={state?.error?.email}
            value={searchParams.get("email") as string}
            // disabled
            className="w-full"
          />

          {/* ----otp */}
          <div className="flex justify-center w-full my-2">
            <InputOTP maxLength={4} name="otp">
              <InputOTPGroup>
                <InputOTPSlot index={0} className="h-15 w-15" />
                <InputOTPSlot index={1} className="h-15 w-15" />
                <InputOTPSlot index={2} className="h-15 w-15" />
                <InputOTPSlot index={3} className="h-15 w-15" />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <Button type="submit" className="w-full mt-5">
            {pending ? "loading..." : "Submit"}
          </Button>
        </Card>
      </form>
    </>
  );
};

export default OtpVerifyForm;
