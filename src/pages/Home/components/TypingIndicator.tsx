import { motion } from "framer-motion";

export default function TypingIndicator() {
    return (
        <div className="flex items-center gap-2.5 px-3 py-2 md:px-4 md:py-3 w-fit inline-flex">
            <motion.div
                className="w-2.5 h-2.5 md:w-4 md:h-4 bg-black rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            />
            <motion.div
                className="w-2.5 h-2.5 md:w-4 md:h-4 bg-black rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
            />
            <motion.div
                className="w-2.5 h-2.5 md:w-4 md:h-4 bg-black rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
        </div>
    );
}
