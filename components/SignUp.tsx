import React from "react";

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface SignUpProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: FormData;
}

const SignUp: React.FC<SignUpProps> = ({ onChange, onSubmit, formData }) => {
  return (
    <div className=" flex p-5 items-center justify-center  w-[550px]  shadow-lg shadow-black rounded-lg  ">
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full bg-black/0.5 gap-6 p-4 border-black"
      >
        <h2 className=" text-center text-3xl font-bold mb-4 text-blue-600">
          Sign Up
        </h2>
        <input
          type="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={onChange}
          required
          className="border p-2 rounded-lg"
        />
        <input
          type="username"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={onChange}
          required
          className="border p-2 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={onChange}
          required
          className="border p-2 rounded-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChange}
          required
          className="border p-2 rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-800"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
