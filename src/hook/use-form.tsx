"use client";
import { useState } from "react";

const useForm = (initialValue: any) => {
  const [form, setForm] = useState(initialValue);
  return [
    form,
    (formType: any, formValue: any) => {
      if (formType === "reset") {
        return setForm(initialValue);
      }
      setForm({ ...form, [formType]: formValue });
      return;
    },
  ];
};

export default useForm;
