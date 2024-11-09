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
          router.push("/");
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
    <SignIn
      onChange={handleChange}
      onSubmit={handleSubmit}
      formData={formData}
    />
  );
};

export default sign_in;
