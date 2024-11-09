"use client";

import SignUp from "@/components/SignUp";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

const sign_up = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/signUP", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);

        setTimeout(() => {
          router.push("/sign_in");
        }, 1500);

        setFormData({ name: "", username: "", email: "", password: "" });
      } else {
        setMessage(data.error);
      }
    } catch (err) {
      console.error(err);
      setMessage("An error occurred");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center w-full">
        <img
          src="/assets/logo.svg"
          alt="logo"
          className="w-[32px] h-[25.6px]"
        />
      </div>
      <SignUp
        onChange={handleChange}
        onSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default sign_up;
