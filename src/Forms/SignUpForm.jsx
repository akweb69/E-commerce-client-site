// SignUpForm.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
    User,
    Mail,
    Lock,
    Phone,
    Upload,
    X,
    Eye,
    EyeOff
} from "lucide-react";

const SignUpForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        profileImage: null,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, profileImage: file });
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sign up data:", formData);
        // Handle signup
        onClose?.(); // Optional: close form on submit
    };

    // Close when clicking backdrop
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose?.();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 px-4 py-8 overflow-y-auto"
            onClick={handleBackdropClick} // Close on backdrop click
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-lg"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside form
            >
                {/* Main Card */}
                <div className="bg-white/95 max-h-[90vh] overflow-y-auto backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-100">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/10"></div>
                        <div className="relative z-10 text-center">
                            <h2 className="text-3xl font-bold">Create Account</h2>
                            <p className="text-orange-100 mt-2">Join us today!</p>
                        </div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl"
                        />
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {/* Profile Image */}
                        <div className="flex justify-center -mt-16">
                            <motion.div whileHover={{ scale: 1.05 }} className="relative">
                                <div className="w-32 h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200">
                                    {imagePreview ? (
                                        <img src={imagePreview} alt="Profile" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="flex items-center justify-center h-full">
                                            <User className="w-16 h-16 text-orange-500" />
                                        </div>
                                    )}
                                </div>
                                <label htmlFor="profile-upload" className="absolute bottom-2 right-2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg cursor-pointer">
                                    <Upload className="w-5 h-5" />
                                </label>
                                <input id="profile-upload" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                            </motion.div>
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-5 mt-4">
                            <div className="relative">
                                <User className="absolute left-4 top-4 w-5 h-5 text-orange-500" />
                                <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full pl-12 pr-4 py-4 bg-orange-50/50 border border-orange-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-orange-50 transition-all placeholder-orange-400 text-gray-900" required />
                            </div>

                            <div className="relative">
                                <Mail className="absolute left-4 top-4 w-5 h-5 text-orange-500" />
                                <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full pl-12 pr-4 py-4 bg-orange-50/50 border border-orange-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-orange-50 transition-all placeholder-orange-400 text-gray-900" required />
                            </div>

                            <div className="relative">
                                <Phone className="absolute left-4 top-4 w-5 h-5 text-orange-500" />
                                <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full pl-12 pr-4 py-4 bg-orange-50/50 border border-orange-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-orange-50 transition-all placeholder-orange-400 text-gray-900" />
                            </div>

                            <div className="relative">
                                <Lock className="absolute left-4 top-4 w-5 h-5 text-orange-500" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create Password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full pl-12 pr-12 py-4 bg-orange-50/50 border border-orange-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-orange-50 transition-all placeholder-orange-400 text-gray-900"
                                    required
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 text-orange-500 hover:text-orange-600">
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all"
                        >
                            Sign Up
                        </motion.button>

                        {/* <p className="text-center text-gray-600 text-sm">
                            Already have an account? <span className="text-orange-500 font-semibold hover:underline cursor-pointer">Sign In</span>
                        </p> */}
                    </form>
                </div>

                {/* Close Button - Now Works! */}
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

export default SignUpForm;