import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { GoSignIn } from "react-icons/go";
import { Link } from "react-router-dom";
import {
  emailValidation,
  passwordValidation,
} from "../../../functions/validationWithRegex";
import useHandleSignInSignOut from "../../../hooks/handleSignInSignOut";
import useAuth from "../../../hooks/useAuth";

const SignIn = () => {
  const { setEmail, setPassword, message, setMessage } = useAuth();
  const { handleGoogleSignIn, handleGithubSignIn, handleEmailPassSignIn } =
    useHandleSignInSignOut();

  const emailInputHandle = (e) => {
    const email = e.target.value;
    emailValidation(email, setMessage);
    setEmail(email);
  };
  const passwordInputHandle = (e) => {
    const password = e.target.value;
    passwordValidation(password, setMessage);
    setPassword(password);
  };

  return (
    <div className="py-10">
      <div className="py-10 container mx-auto bg-green-50 shadow-lg rounded-xl">
        <h2 className="text-center text-green-700 text-3xl mb-4">Sign In</h2>
        <form
          onSubmit={handleEmailPassSignIn}
          className="flex flex-col items-center space-y-2"
        >
          <div className="border-2 w-60 border-green-700 flex rounded-3xl">
            <input
              onBlur={emailInputHandle}
              className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="border-2 w-60 border-green-700 flex rounded-3xl">
            <input
              onBlur={passwordInputHandle}
              className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
            />
          </div>

          <p className="text-red-500">{message}</p>

          <div className="flex items-center justify-center mt-5">
            <button className="mt-2 flex items-center cursor-pointer justify-center bg-green-600 rounded-full px-6 py-2 text-gray-50 tracking-widest font-semibold transition hover:bg-green-500 focus:ring focus:ring-offset-2 focus:ring-offset-green-500 focus:ring-opacity-70">
              Sign In
              <GoSignIn className="ml-2" />
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center space-x-8 mt-4">
          <Link className="text-blue-800" to="/login">
            Forgotten Password?
          </Link>
          <p>
            Don't have an account?{" "}
            <Link className="text-blue-800" to="/signUp">
              Create new.
            </Link>
          </p>
        </div>

        <h3 className="text-2xl text-center text-green-700 my-4">or</h3>
        <div className="">
          <p className="text-gray-700 text-lg text-center">Sign in with</p>

          <div className="flex items-center justify-center space-x-2 mt-2">
            <FcGoogle
              onClick={handleGoogleSignIn}
              size="2em"
              className="cursor-pointer"
            />
            <AiFillGithub
              onClick={handleGithubSignIn}
              size="2em"
              className="cursor-pointer"
            />
            <BsFacebook size="2em" className="cursor-pointer" color="blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
