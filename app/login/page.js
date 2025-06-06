"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    // Clear localStorage when the component mounts
    useEffect(() => {
        localStorage.removeItem("token");
    }, []);


    const handleLogin = async () => {
        setError("");
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("token", data.token);
                router.push("/dashboard");  // Redirect to homepage
            } else {
                setError(data.message);
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("An error occurred. Please try again.");
        }
    };

    const handleVisitorAccess = () => {
        router.push("/visitor");  // Redirect to homepage
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="bg-black p-8 rounded-md shadow-md max-w-sm w-full text-orange-200">
                <img src="/logo.webp" alt="Logo" className="h-30 mx-auto mb-4 rounded-md" />
                <h2 className="text-2xl mb-4 text-center text-orange-500">Gradio mcp Hackathon</h2>
                <h2 className="mb-4 text-center text-orange-200">a fake app to test mcp scraping</h2>
                <p className="text-xl text-orange-200">Enter your credentials</p>
                <p className="text-sm text-orange-200">username: gradio</p>
                <p className="text-sm text-orange-200">password: mcp</p>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <input
                    className="w-full mt-2 mb-3 p-2 border rounded"
                    type="text"
                    title="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="w-full mb-3 p-2 border rounded"
                    type="password"
                    title="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    title="login"
                    className="w-full bg-gray-500 text-orange-200 p-2 rounded mb-3"
                    onClick={handleLogin}
                >
                    Login
                </button>
                <p className="text-sm text-orange-200">The "just for fake" logo was designed using the huggingface space <a className="text-orange-500" href="https://huggingface.co/spaces/fantaxy/ofai-flx-logo">ofai-flx-logo</a></p>
                <div className="flex items-center justify-center mt-2">
                      <a  href="https://https://huggingface.co/spaces/sylvain471/fake-app-scaper" >
                            <Image
                              aria-hidden
                              src="/hf-logo-white.png"
                              alt="hf-space icon"
                              width={29}
                              height={29}
                            />
                          </a>
                          <a className="ml-2" href="https://github.com/sdelahaies/fake-app" >
                            <Image
                              aria-hidden
                              src="/github-mark-white.svg"
                              alt="github icon"
                              width={25}
                              height={25}
                            />
                          </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
