"use client";
import { toast } from "@/components/atoms/toast-comp/toast-comp";
import useForm from "@/hook/use-form";
import useSessionStorage from "@/hook/use-session-storage";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LoginAdmin = () => {
  const router = useRouter();
  const isLogin = useSessionStorage("isLogin");
  const [formData, setFormData] = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/v1/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success",
          message: "Success to authenticate",
          type: "success",
        });
        sessionStorage.setItem("isLogin", formData.username);
        return router.push("/dashboard");
      } else {
        return toast({
          title: "Error",
          message: "Failed to authenticate",
          type: "error",
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        message: "Failed to authenticate",
        type: "error",
      });
    }
  };

  useEffect(() => {
    console.log(isLogin);
    if (isLogin !== null) {
      return router.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in admin
        </h1>
        <div className="space-y-4 md:space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Username
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={(event) => setFormData("username", event?.target.value)}
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              value={formData.password}
              onChange={(event) => setFormData("password", event?.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            onClick={() => handleSubmit()}
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-500 dark:hover:bg-blue-700 dark:focus:ring-primary-800">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
