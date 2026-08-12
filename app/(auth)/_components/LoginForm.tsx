"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { signinAction } from "../_actions/signinActions";
import { useActionState, useEffect } from "react";
import { toast } from "@/components/ui/toast";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [state, action, pending] = useActionState(signinAction, false);
  const router = useRouter();

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
      router.push("/");

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
            errMsg={state.error?.email}
          />
          {/* ----passWord */}
          <Input
            name="password"
            type="password"
            labelName="PassWord"
            errMsg={state.error?.password}
          />

          <Button type="submit">{pending ? "loading..." : "SignIn"}</Button>
        </Card>
      </form>
    </>
  );
};

export default LoginForm;
