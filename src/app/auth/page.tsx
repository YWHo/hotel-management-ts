"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const inputStyles =
  "border border-gray-300 sm:text-sm text-black rounded-lg black w-full p-2.5 focus:outline-none";

const defaultFormData = {
  email: "",
  name: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log("handleSubmit formData:\n", formData);
    } catch (err) {
      console.log("handleSubmit err:\n", err);
    } finally {
      setFormData(defaultFormData);
    }
  };

  return (
    <section className="container">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an account
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />{" "}
            |<FcGoogle className="ml-3 text-4xl cursor-pointer"></FcGoogle>
          </span>
        </div>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            required
            minLength={3}
            className={inputStyles}
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            required
            minLength={2}
            className={inputStyles}
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            minLength={10}
            className={inputStyles}
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Sign Up
          </button>
        </form>

        <button className="text-blue-700 underline">login</button>
      </div>
    </section>
  );
};

export default Auth;
