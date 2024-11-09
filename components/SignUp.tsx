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
    <div className="flex p-5 items-center justify-center  w-[400px] h-[418px] bg-[#161D2F] rounded-[20px]">
      <form onSubmit={onSubmit} className="flex flex-col w-full p-4 ">
        <h2 className="mt-8 text-[32px] text-white">Sign Up</h2>

        <input
          type="username"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={onChange}
          required
          className="w-[336px] h-[37px] mt-10 p-2  border-b border-[#5A698F] bg-[#161D2F] outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={onChange}
          required
          className="w-[336px] h-[37px] mt-6 p-2  border-b border-[#5A698F] bg-[#161D2F] outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChange}
          required
          className="w-[336px] h-[37px] mt-6 p-2  border-b border-[#5A698F] bg-[#161D2F] outline-none focus:ring-0 text-white hover:border-b-white hover:cursor-pointer"
        />
        <button
          type="submit"
          className="mt-6 bg-[#FC4747] text-white p-2 w-[336px] h-[48px] rounded hover:bg-white hover:text-black"
        >
          Create an account
        </button>
        <p className="mt-6 mb-8 text-center text-[15px] text-white">
          Already have an account?{"  "}
          <span className="text-[#FC4747] hover:cursor-pointer">Login</span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
