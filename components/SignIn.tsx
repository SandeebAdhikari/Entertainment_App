import React from "react";

interface FormData {
  username: string;
  password: string;
}

interface SignInProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: FormData;
}

const SignIn: React.FC<SignInProps> = ({ onChange, onSubmit, formData }) => {
  return (
    <div className="flex p-5 items-center justify-center  w-[550px]  shadow-lg shadow-black rounded-lg">
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full bg-black/0.5 gap-6 p-4 border-black"
      >
        <input
          type="username"
          name="username"
          placeholder="Username or Email"
          value={formData.username}
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
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
