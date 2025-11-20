import { motion } from "framer-motion";
import { LoaderPinwheel, } from "lucide-react";

const Loader = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-transparent">
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4"
            >

                {/* Rotating Icon */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                    className="relative"
                >
                    <LoaderPinwheel className="w-14 h-14  text-orange-500" />
                </motion.div>

                {/* Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="text-lg font-medium text-orange-500 "
                >
                    Loading, please wait...
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Loader;
