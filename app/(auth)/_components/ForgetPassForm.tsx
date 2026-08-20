"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";
import React, { useActionState, useEffect } from "react";
import { forgetPasswordAction } from "../_actions/forgetPassAction";

const ForgetPassForm = () => {
  const [state, action, pending] = useActionState(forgetPasswordAction, false);

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
          />

          <Button type="submit">{pending ? "loading..." : "Send mail"}</Button>
        </Card>
      </form>
    </>
  );
};

export default ForgetPassForm;
