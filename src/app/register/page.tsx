import { RegisterForm } from "@/components/register-form";
import React from "react";

function page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <RegisterForm />
      </div>
    </div>
  );
}

export default page;
