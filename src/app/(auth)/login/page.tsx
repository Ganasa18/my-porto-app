import LoginAdmin from "@/components/molecules/admin/login-admin/login-admin";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href={"/"}
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image
            width={200}
            height={200}
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Login Admin
        </Link>
        <LoginAdmin />
      </div>
    </section>
  );
};

export default LoginPage;
