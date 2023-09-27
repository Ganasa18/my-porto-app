"use client";
import Button from "@/components/atoms/button/button";
import HeaderCompTitle from "@/components/atoms/header-title-comp/header-title-comp";
import { useDebounce } from "@/hook/use-debounce";
import useForm from "@/hook/use-form";
import { formDataContactMe } from "@/interface/interface-form";
import React, { useState } from "react";

const FrontContactMe = () => {
  const [formData, setFormData] = useForm({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmitContactMe = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    let formBody = {
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    console.log(formBody);

    try {
      const response = await fetch("/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formBody),
      });

      if (response.ok) {
        alert("Email sent successfully");
        setTimeout(() => {
          setFormData("reset");
          console.log(formData);
        }, 500);
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="mt-20">
      <HeaderCompTitle title="Get In Touch" subtitle="Contact Me" />
      <section className="bg-black bg-opacity-50 dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form onSubmit={handleSubmitContactMe} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
                Your email
              </label>
              <input
                value={formData.email}
                onChange={(event) => setFormData("email", event?.target.value)}
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
                Subject
              </label>
              <input
                value={formData.subject}
                onChange={(event) =>
                  setFormData("subject", event?.target.value)
                }
                type="text"
                className="block p-3 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white dark:text-gray-400">
                Your message
              </label>
              <textarea
                value={formData.message}
                onChange={(event) =>
                  setFormData("message", event?.target.value)
                }
                rows={6}
                className="block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."></textarea>
            </div>
            <Button type="submit" variant={"default"}>
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default FrontContactMe;
