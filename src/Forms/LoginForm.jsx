// LoginForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, X } from "lucide-react";

const LoginForm = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login:", { email, password });
        // Your login logic here
        // onClose?.(); // Optional: close on successful login
    };

    // Close when clicking outside the card
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose?.();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 px-4 py-8 overflow-y-auto"
            onClick={handleBackdropClick} // Click outside → close
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-md"
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
            >
                {/* Main Card */}
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-100 overflow-hidden">
                    {/* Orange Gradient Header */}
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-10 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/10"></div>
                        <div className="relative z-10 text-center">
                            <motion.h2
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                className="text-4xl font-bold"
                            >
                                Welcome Back
                            </motion.h2>
                            <p className="text-orange-100 mt-2 text-lg">Log in to your account</p>
                        </div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-20 -right-20 w-64 h-64 bg-orange-400/30 rounded-full blur-3xl"
                        />
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {/* Email Field */}
                        <div className="relative">
                            <Mail className="absolute left-4 top-4 w-5 h-5 text-orange-500" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-orange-50/50 border border-orange-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-orange-50 transition-all placeholder-orange-400 text-gray-800"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <Lock className="absolute left-4 top-4 w-5 h-5 text-orange-500" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-12 pr-12 py-4 bg-orange-50/50 border border-orange-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-orange-50 transition-all placeholder-orange-400 text-gray-800"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-4 text-orange-500 hover:text-orange-600 transition"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500" />
                                <span className="text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-orange-500 hover:underline font-medium">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-200"
                        >
                            Log In
                        </motion.button>

                        {/* Divider */}
                        {/* <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-orange-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">Or</span>
                            </div>
                        </div> */}

                        {/* Sign Up Link */}
                        {/* <p className="text-center text-gray-600">
                            Don't have an account?{" "}
                            <span className="text-orange-500 font-semibold hover:underline cursor-pointer">
                                Sign Up
                            </span>
                        </p> */}
                    </form>
                </div>

                {/* Close Button - Now Fully Working! */}
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-xl border border-gray-200 z-10"
                >
                    <X className="w-6 h-6 text-gray-600" />
                </motion.button>
            </motion.div>
        </div>
    );
};

export default LoginForm;