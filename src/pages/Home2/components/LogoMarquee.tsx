import { motion } from "framer-motion";

const logos = [
    "/logo/Kraftonlogo.png",
    "/logo/andarlogo.png",
    "/logo/cjlogo.png",
    "/logo/egnislogo.png",
    "/logo/kluglogo.png",
    "/logo/mongzelogo.png",
    "/logo/northfacelogo.png",
    "/logo/osstemlogo.png",
    "/logo/skecherslogo.png",
    "/logo/timberlandlogo.png",
    "/logo/vanslogo.png",
    "/logo/xexymixlogo.png",
];

const LogoMarquee = ({ dark = true }: { dark?: boolean }) => {
    // Duplicate logos for seamless loop
    const duplicatedLogos = [...logos, ...logos, ...logos];

    const bgColor = dark ? "bg-[#1A1A1A]" : "bg-white";
    const textColor = dark ? "text-white/40" : "text-[#1F1F23]/40";
    const gradientFrom = dark ? "from-[#1A1A1A]" : "from-white";
    return (
        <div className={`w-full overflow-hidden ${bgColor} py-12 relative z-10`}>
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className={`${textColor} text-[10px] uppercase tracking-[0.3em] font-bold`}>Trusted by global leaders</p>
            </div>

            <div className="relative flex items-center">
                {/* Gradient Overlays for smooth fading edges */}
                <div className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r ${gradientFrom} to-transparent z-10`} />
                <div className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l ${gradientFrom} to-transparent z-10`} />

                <motion.div
                    className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
                    animate={{ x: ["-50%", "0%"] }} // Left to right motion
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {duplicatedLogos.map((logo, idx) => (
                        <div
                            key={idx}
                            className={`flex-shrink-0 grayscale transition-all duration-500 cursor-pointer ${dark
                                ? 'bg-white px-8 py-4 rounded-2xl opacity-90 hover:opacity-100 shadow-sm'
                                : 'opacity-60 hover:opacity-100'
                                } hover:grayscale-0`}
                        >
                            <img
                                src={logo}
                                alt="Partner Logo"
                                className={dark ? "h-6 md:h-7 lg:h-8 w-auto object-contain" : "h-8 md:h-10 lg:h-12 w-auto object-contain"}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default LogoMarquee;
