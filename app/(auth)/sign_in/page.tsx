"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import SignIn from "@/components/SignIn";
import { useRouter } from "next/navigation";

const sign_in = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/signIN", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Login successful!");
        setTimeout(() => {
          router.push("/home");
        }, 1500);
        setFormData({ username: "", password: "" });
      } else {
        setMessage(data.error || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setMessage("An error occurred");
    }
  };
  return (
    <div className="flex flex-col">
      <div className="mb-[82.99px] flex items-center justify-center w-full">
        <img
          src="/assets/logo.svg"
          alt="logo"
          className="w-[32px] h-[25.6px]"
        />
      </div>
      <SignIn
        onChange={handleChange}
        onSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default sign_in;
