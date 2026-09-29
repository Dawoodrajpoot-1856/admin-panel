"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin() {
    if (email === "admin@gmail.com" && password === "123456") {
      console.log("ADMIN LOGIN");

      router.push("/admin");
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white p-3 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}
