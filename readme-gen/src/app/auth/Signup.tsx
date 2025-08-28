"use client";
import { useState } from "react";
import { Eye, EyeOff, Github, X } from "lucide-react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      {/* Card */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-blue-500">
        {/* Close Icon */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X size={20} />
        </button>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h1>

        {/* GitHub Button */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-400 py-3 rounded-md hover:bg-gray-50 transition font-medium">
          <Github size={20} /> Continue with GitHub
        </button>

        {/* OR Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Conform Email
            </label>
            <input
              type="email"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? (
                  <>
                    <EyeOff size={18} /> <span className="ml-1 text-xs">Hide</span>
                  </>
                ) : (
                  <>
                    <Eye size={18} /> <span className="ml-1 text-xs">Show</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 border-gray-400" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Bottom Info */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/auth/login" className="underline font-medium text-black">
            Login up
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-3 text-xs text-gray-500 text-center">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="underline">
            Learn more
          </a>.
        </p>
      </div>
    </div>
  );
}
