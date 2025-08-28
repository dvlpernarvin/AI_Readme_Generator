"use client";

import { useState } from "react";
import { Eye, EyeOff, Github } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black/70 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          ✕
        </button>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Log in
        </h1>

        {/* GitHub Login */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-400 py-3 rounded-lg hover:bg-gray-50 transition font-medium mb-4">
          <Github className="w-5 h-5" /> Continue with GitHub
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-5">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Email or phone number
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="flex justify-between items-center text-sm font-medium text-gray-700 mb-1">
              <span>Password</span>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex items-center text-sm text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <>
                    <EyeOff size={16} className="mr-1" /> Hide
                  </>
                ) : (
                  <>
                    <Eye size={16} className="mr-1" /> Show
                  </>
                )}
              </button>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Login button */}
          <button className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 font-medium transition">
            Log in
          </button>

          {/* Remember me & Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Sign up
          </a>
        </div>
        <p className="mt-2 text-xs text-gray-500 text-center">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="underline text-gray-700">
            Learn more.
          </a>
        </p>
      </div>
    </div>
  );
}
