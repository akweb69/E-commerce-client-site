import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Shield, Eye, EyeOff, X } from "lucide-react";

const AdminLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Admin Login:", { email, password });
        // Add admin auth logic
    };

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-orange-950 flex items-center justify-center z-50 px-4 py-8 overflow-hidden">
            {/* Animated Background Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-96 h-96 bg-orange-600/20 rounded-full blur-3xl -top-40 -left-40"
            />
            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 80, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80 bg-orange-500/30 rounded-full blur-3xl bottom-0 right-0"
            />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                className="relative w-full max-w-md"
            >
                {/* Main Admin Card */}
                <div className="bg-black/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-orange-500/30 overflow-hidden">
                    {/* Admin Header */}
                    <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 p-10 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="relative z-10"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md">
                                    <Shield className="w-12 h-12" />
                                </div>
                            </div>
                            <h2 className="text-4xl font-bold tracking-tight">Admin Portal</h2>
                            <p className="text-orange-100 mt-2 text-lg">Secure Access Required</p>
                        </motion.div>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-7">
                        {/* Email */}
                        <div className="relative group">
                            <Mail className="absolute left-4 top-4 w-5 h-5 text-orange-400 group-focus-within:text-orange-300 transition" />
                            <input
                                type="email"
                                placeholder="Admin Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-orange-500/40 rounded-xl focus:outline-none focus:border-orange-400 focus:bg-white/15 text-white placeholder-orange-300 backdrop-blur-md transition-all"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="relative group">
                            <Lock className="absolute left-4 top-4 w-5 h-5 text-orange-400 group-focus-within:text-orange-300 transition" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-12 pr-12 py-4 bg-white/10 border border-orange-500/40 rounded-xl focus:outline-none focus:border-orange-400 focus:bg-white/15 text-white placeholder-orange-300 backdrop-blur-md transition-all"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-4 text-orange-400 hover:text-white transition"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg rounded-xl shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center gap-3 group"
                        >
                            <Shield className="w-5 h-5 group-hover:rotate-12 transition" />
                            Access Admin Dashboard
                        </motion.button>

                        <div className="text-center">
                            <p className="text-orange-300 text-sm">
                                Protected system • Authorized access only
                            </p>
                        </div>
                    </form>
                </div>

                {/* Close Button */}
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.history.back()}
                    className="absolute -top-4 -right-4 bg-orange-600 text-white rounded-full p-3 shadow-2xl border-2 border-white/20"
                >
                    <X className="w-6 h-6" />
                </motion.button>
            </motion.div>
        </div>
    );
};

export default AdminLoginForm;