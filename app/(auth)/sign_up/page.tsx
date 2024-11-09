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
    <SignUp
      onChange={handleChange}
      onSubmit={handleSubmit}
      formData={formData}
    />
  );
};

export default sign_up;
