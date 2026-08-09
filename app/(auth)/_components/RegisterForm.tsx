"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { signupAction } from "../_actions/signupActions";
import { useActionState, useEffect } from "react";
import { toast } from "@/components/ui/toast";

const RegisterForm = () => {
  const [state, action, pending] = useActionState(signupAction, false);

  useEffect(() => {
    console.log(state);

    if (!state) return;

    if (!state.success) {
      toast.add({
        type: "Error",
        description: state.message,
      });
    }
  }, [state]);

  return (
    <>
      <form action={action} className="flex flex-col gap-2">
        <Card className="px-8 py-8">
          {/* ---name */}
          <Input
            name="name"
            type="text"
            labelName="Name"
            errMsg={state.error?.name}
          />
          {/* ----email */}
          <Input
            name="email"
            type="email"
            labelName="Email"
            errMsg={state.error?.email}
          />
          {/* ----passWord */}
          <Input
            name="password"
            type="password"
            labelName="PassWord"
            errMsg={state.error?.password}
          />

          <Button type="submit">{pending ? "loading..." : "Signup"}</Button>
        </Card>
      </form>
    </>
  );
};

export default RegisterForm;
