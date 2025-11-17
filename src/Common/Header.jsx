import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = ['Home', 'Courses', 'About', 'Blog', 'Contact'];

const Header = () => {
    const [open, setOpen] = useState(false);

    // Hamburger → close icon morph
    const iconVariants = {
        open: { rotate: 180 },
        closed: { rotate: 0 },
    };

    // Mobile menu container
    const menuVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: {
            height: 'auto',
            opacity: 1,
            transition: { staggerChildren: 0.07, delayChildren: 0.1 },
        },
        exit: { height: 0, opacity: 0 },
    };

    // Each child (link / search / btn)
    const itemVariants = {
        hidden: { y: -15, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <header className="color-bg-1 text-white shadow-md sticky top-0 z-50 mb-6">
            <div className="w-11/12 mx-auto ">
                <div className="flex items-center justify-between h-16">
                    {/* LEFT – LOGO */}
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex-shrink-0"
                    >
                        <span className="text-2xl font-bold color-t">LOGO</span>
                    </motion.div>

                    {/* RIGHT – DESKTOP NAV */}
                    <div className="hidden md:flex items-center space-x-6">
                        <nav className="flex items-center space-x-5">
                            {navLinks.map(l => (
                                <motion.a
                                    key={l}
                                    href="#"
                                    whileHover={{ scale: 1.05 }}
                                    className="color-t hover:opacity-80 transition"
                                >
                                    {l}
                                </motion.a>
                            ))}
                        </nav>

                        <motion.input
                            type="text"
                            placeholder="Search product…"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="px-3 rounded border border-orange-400 outline-0 text-sm color-bg-1 color-t outline-none w-32 lg:w-48 py-2"
                        />

                        <motion.button
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="color-2 px-4 py-2 rounded text-sm font-semibold color-t"
                        >
                            Sign Up
                        </motion.button>
                    </div>

                    {/* MOBILE HAMBURGER */}
                    <div className="md:hidden">
                        <motion.button
                            animate={open ? 'open' : 'closed'}
                            variants={iconVariants}
                            onClick={() => setOpen(!open)}
                            className="color-t focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </motion.button>
                    </div>
                </div>

                {/* MOBILE DROPDOWN WITH MOTION */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="md:hidden overflow-hidden"
                        >
                            <div className="pb-4 space-y-3">
                                {navLinks.map(l => (
                                    <motion.a
                                        key={l}
                                        variants={itemVariants}
                                        href="#"
                                        className="block color-t hover:opacity-80"
                                    >
                                        {l}
                                    </motion.a>
                                ))}

                                <motion.input
                                    variants={itemVariants}
                                    type="text"
                                    placeholder="Search…"
                                    className="w-full px-3 py-2 rounded text-sm color-bg-1 color-t"
                                />

                                <motion.button
                                    variants={itemVariants}
                                    whileTap={{ scale: 0.96 }}
                                    className="w-full color-2 py-2 rounded text-sm font-semibold color-t"
                                >
                                    Sign Up
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;