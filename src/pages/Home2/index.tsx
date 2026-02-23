import { motion, useScroll, useTransform, useMotionTemplate, Variants } from "framer-motion";
import { Asterisk, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import Typewriter from "./components/Typewriter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Home2() {
    const { scrollY } = useScroll();
    const logoScale = useTransform(scrollY, [0, 400], [1, 0.32]);
    const logoY = useTransform(scrollY, [0, 400], [60, 0]);
    const logoX = useTransform(scrollY, [0, 400], [0, 0]);

    const navOpacity = useTransform(scrollY, [150, 300], [0, 1]);
    const navBorderAlpha = useTransform(scrollY, [150, 300], [0, 0.1]);
    const navBorder = useMotionTemplate`rgba(0,0,0,${navBorderAlpha})`;

    const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);
    const textY = useTransform(scrollY, [0, 200], [0, -50]);

    const containerVariants: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.4,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: "110%", opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <div className="min-h-[200vh] bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
            <SEO
                title="NIT America | Advanced Infrastructure"
                description="Scaling messaging infrastructure and launching brands in Korea with precision."
            />

            {/* GNB Background - Using the scroll linked opacity and border */}
            <motion.nav
                style={{ opacity: navOpacity, borderBottomColor: navBorder as any }}
                className="fixed top-0 left-0 w-full h-16 bg-background/90 backdrop-blur-md z-40 border-b"
            >
                <Navbar />
            </motion.nav>

            {/* Hero Section Container */}
            <div className="relative">
                {/* Navigation / Logo Container (Scaled Logo) */}
                <header className="fixed top-0 left-0 w-full z-50 h-16 pointer-events-none">
                    <div className="container h-full flex items-center">
                        <motion.div
                            style={{
                                scale: logoScale,
                                x: logoX,
                                y: logoY,
                                originX: 0,
                                originY: 0.5
                            }}
                            className="pointer-events-auto inline-block"
                        >
                            <Link to="/" className="flex flex-col items-start gap-2">
                                <div
                                    style={{ width: 900, height: 100 }}
                                    className="flex items-center justify-start"
                                >
                                    <img
                                        src="/home/homebtn.png"
                                        alt="NIT America"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <motion.span
                                    style={{ opacity: useTransform(scrollY, [0, 100], [1, 0]) }}
                                    className="text-accent font-semibold tracking-[0.3em] uppercase text-sm ml-4"
                                >
                                    Nexus of Innovation & Trade
                                </motion.span>
                            </Link>
                        </motion.div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative h-screen flex flex-col justify-end items-end px-8 md:px-24 pb-32 overflow-hidden">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ opacity: textOpacity, y: textY }}
                        className="max-w-full text-right"
                    >
                        <div className="overflow-hidden py-1">
                            <motion.h2
                                variants={itemVariants}
                                className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A]"
                            >
                                <Typewriter text="Messaging" minWidth="10ch" /> infrastructure
                            </motion.h2>
                        </div>
                        <div className="overflow-hidden py-1">
                            <motion.h2
                                variants={itemVariants}
                                className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A]"
                            >
                                that scales.
                            </motion.h2>
                        </div>

                        <div className="h-8 md:h-12" />

                        <div className="overflow-hidden py-1">
                            <motion.div
                                variants={itemVariants}
                                className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A] flex items-center justify-end gap-3 md:gap-6"
                            >
                                <span>Launch</span>
                                <span className="inline-block w-20 h-10 md:w-32 md:h-16 bg-black rounded-full relative overflow-hidden" aria-hidden="true">
                                    <motion.span
                                        animate={{
                                            x: [-24, 24],
                                            rotate: [0, 360]
                                        }}
                                        transition={{
                                            duration: 1.6,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <Asterisk className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] text-white" />
                                    </motion.span>
                                </span>
                                <span>brands</span>
                            </motion.div>
                        </div>
                        <div className="overflow-hidden py-1">
                            <motion.p
                                variants={itemVariants}
                                className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A]"
                            >
                                in Korea.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-12 flex justify-end"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-4 text-2xl md:text-[48px] font-medium uppercase tracking-tight text-foreground hover:text-accent transition-all duration-300 group pointer-events-auto"
                            >
                                Request Consultation <ArrowRight className="w-8 h-8 md:w-[48px] md:h-[48px] group-hover:translate-x-3 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Bottom-left Scroll Indicator */}
                    <div className="absolute bottom-12 left-0 w-full pointer-events-none z-20">
                        <div className="container">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5, duration: 1 }}
                                className="flex items-center gap-4 text-sm uppercase tracking-widest font-medium opacity-30"
                            >
                                <div className="w-px h-12 bg-foreground/20 relative overflow-hidden">
                                    <motion.div
                                        animate={{ y: [0, 48, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-0 left-0 w-full h-1/3 bg-foreground"
                                    />
                                </div>
                                <span>Scroll to explore</span>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Messaging Section */}
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4, margin: "0px 0px -200px 0px" }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.21, 0.45, 0.32, 0.9] }}
                className="px-8 md:px-24 py-32 bg-[#F8F9FA] relative z-10"
            >
                <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr,1.4fr] gap-16 lg:gap-20 items-center">
                    {/* Left side */}
                    <div className="space-y-10 text-left pr-4">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-bold tracking-tight text-[#1F1F23]">
                                Messaging you can trust—<br />at scale.
                            </h2>
                            <p className="text-lg md:text-xl text-[#475569] leading-relaxed font-medium">
                                SMS and RCS with validation, smart routing, and compliance built in.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-[#F0F4FA] border border-[#E2E8F0] rounded-[16px] text-[13px] font-medium text-[#475569]">
                                Delivery 99.x% (Example)
                            </span>
                            <span className="px-4 py-2 bg-[#F0F4FA] border border-[#E2E8F0] rounded-[16px] text-[13px] font-medium text-[#475569]">
                                Opt-out ready
                            </span>
                            <span className="px-4 py-2 bg-[#F0F4FA] border border-[#E2E8F0] rounded-[16px] text-[13px] font-medium text-[#475569]">
                                A2P-ready setup
                            </span>
                        </div>

                        <div className="pt-6">
                            <Link to="/messaging" className="inline-flex items-center gap-1.5 text-[17px] font-semibold text-[#1F1F23] hover:text-[#475569] transition-colors group pb-1 border-b-[2px] border-[#1F1F23] hover:border-[#475569]">
                                Explore Messaging <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Right side - Diagram Card */}
                    <div className="w-full bg-white rounded-3xl border border-[#E2E8F0] shadow-sm p-8 md:p-12">
                        {/* Flow Diagram */}
                        <div className="flex items-center justify-between gap-1 h-40 relative">
                            {/* App/CRM */}
                            <div className="z-10 bg-white border border-[#E2E8F0] rounded-xl px-4 py-4 md:py-6 shadow-sm flex items-center justify-center min-w-[100px]">
                                <span className="text-[12px] font-bold text-[#475569]">APP/CRM</span>
                            </div>

                            {/* Line */}
                            <div className="flex-1 h-[1px] bg-[#CBD5E1] relative">
                                <motion.div
                                    animate={{ left: ["0%", "100%"] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#64748B]"
                                />
                            </div>

                            {/* NIT Messaging */}
                            <div className="z-10 bg-[#F4F6F9] border-[1.5px] border-[#1F1F23] rounded-xl px-6 py-6 shadow-sm flex flex-col items-center justify-center min-w-[140px] gap-0.5 relative">
                                <span className="text-[14px] font-black tracking-tight text-[#1F1F23]">NIT</span>
                                <span className="text-[11px] font-bold text-[#475569]">Messaging</span>
                            </div>

                            {/* Line & Text */}
                            <div className="flex-1 h-[1px] bg-[#CBD5E1] relative flex justify-center items-end pb-3">
                                <motion.div
                                    animate={{ left: ["0%", "100%"] }}
                                    transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#64748B]"
                                />
                            </div>

                            {/* SMS/RCS */}
                            <div className="z-10 bg-white border border-[#E2E8F0] rounded-xl px-4 py-4 md:py-6 shadow-sm flex items-center justify-center min-w-[100px]">
                                <span className="text-[12px] font-bold text-[#475569]">SMS/RCS</span>
                            </div>

                            {/* Line */}
                            <div className="flex-1 h-[1px] bg-[#CBD5E1] relative">
                                <motion.div
                                    animate={{ left: ["0%", "100%"] }}
                                    transition={{ duration: 1.5, delay: 1, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#64748B]"
                                />
                            </div>

                            {/* Carrier */}
                            <div className="z-10 bg-white border border-[#E2E8F0] rounded-xl px-4 py-4 md:py-6 shadow-sm flex items-center justify-center min-w-[100px]">
                                <span className="text-[12px] font-bold text-[#475569]">Carrier</span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-[#E2E8F0] mt-12 mb-8" />

                        {/* Bottom Metrics */}
                        <div className="flex justify-between items-center px-2">
                            <div className="bg-[#F0F4FA] rounded-full px-5 py-2 flex items-center gap-2.5 border border-[#E2E8F0]">
                                <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider">Delivered</span>
                                <span className="text-[15px] font-black text-[#1F1F23]">99.2%</span>
                            </div>
                            <div className="bg-[#F0F4FA] rounded-full px-5 py-2 flex items-center gap-2.5 border border-[#E2E8F0]">
                                <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider">Failed</span>
                                <span className="text-[15px] font-black text-[#1F1F23]">0.3%</span>
                            </div>
                            <div className="bg-[#F0F4FA] rounded-full px-5 py-2 flex items-center gap-2.5 border border-[#E2E8F0]">
                                <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider">Opt-out</span>
                                <span className="text-[15px] font-black text-[#1F1F23]">0.5%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Dark Transition Section */}
            <section
                className="px-8 md:px-24 py-32 bg-[#0F1115] relative z-10 flex flex-col items-center text-center overflow-hidden"
            >
                {/* Wavy Background Elements */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 200C240 100 480 300 720 200C960 100 1200 300 1440 200" stroke="white" strokeWidth="2" />
                        <path d="M0 250C240 150 480 350 720 250C960 150 1200 350 1440 250" stroke="white" strokeWidth="1" />
                    </svg>
                </div>

                <div className="w-full space-y-8 relative z-10 mx-auto overflow-hidden py-4">
                    {/* Line 1: Left to Right */}
                    <div className="flex whitespace-nowrap">
                        <motion.div
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="flex gap-12"
                        >
                            {[...Array(4)].map((_, i) => (
                                <h2 key={i} className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight text-white italic">
                                    Messaging is not the end.
                                </h2>
                            ))}
                        </motion.div>
                    </div>

                    {/* Line 2: Right to Left */}
                    <div className="flex whitespace-nowrap">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="flex gap-12"
                        >
                            {[...Array(4)].map((_, i) => (
                                <h2 key={i} className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight text-white italic">
                                    It's where market entry begins.
                                </h2>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Korea Market Entry Section */}
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4, margin: "0px 0px -200px 0px" }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
                className="px-8 md:px-24 py-32 bg-white relative z-10"
            >
                <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr,1.4fr] gap-16 lg:gap-20 items-center">
                    {/* Left side */}
                    <div className="space-y-10 text-left pr-4">
                        <div className="space-y-6">
                            <span className="text-[11px] font-bold tracking-[0.1em] text-[#94A3B8] uppercase">Brand Licensing & Distribution</span>
                            <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-bold tracking-tight text-[#1F1F23]">
                                Launch in Korea — <br />run with precision.
                            </h2>
                            <p className="text-lg md:text-xl text-[#475569] leading-relaxed font-medium">
                                End-to-end licensing and distribution operator.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-[#F0F4FA] border border-[#E2E8F0] rounded-[16px] text-[13px] font-medium text-[#475569]">
                                Licensing & Import
                            </span>
                            <span className="px-4 py-2 bg-[#F0F4FA] border border-[#E2E8F0] rounded-[16px] text-[13px] font-medium text-[#475569]">
                                Commerce Ops
                            </span>
                            <span className="px-4 py-2 bg-[#F0F4FA] border border-[#E2E8F0] rounded-[16px] text-[13px] font-medium text-[#475569]">
                                Local Growth
                            </span>
                        </div>

                        <div className="pt-6">
                            <Link to="/licensing" className="inline-flex items-center gap-1.5 text-[17px] font-semibold text-[#1F1F23] hover:text-[#475569] transition-colors group pb-1 border-b-[2px] border-[#1F1F23] hover:border-[#475569]">
                                Explore Brand Licensing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Right side - Diagram Card */}
                    <div className="w-full bg-[#FBFBFC] rounded-3xl border border-[#E2E8F0] p-8 md:p-12 relative overflow-hidden">
                        <div className="text-[11px] font-bold tracking-[0.05em] text-[#94A3B8] uppercase mb-12">Korea Launch Playbook</div>

                        {/* Launch Playbook Diagram */}
                        <div className="relative h-64 flex items-center justify-center">
                            {/* Central Node */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="z-20 bg-white border-[1.5px] border-[#1F1F23] rounded-xl px-6 py-4 shadow-sm flex flex-col items-center justify-center min-w-[120px] relative"
                            >
                                <span className="text-[14px] font-black tracking-tight text-[#1F1F23]">Korea</span>
                                <span className="text-[11px] font-bold text-[#475569]">Entry</span>
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                    className="absolute inset-0 border border-[#1F1F23] rounded-xl"
                                />
                            </motion.div>

                            {/* D2C Store (Top Left) */}
                            <div className="absolute top-0 left-12 z-10 bg-white border border-[#E2E8F0] rounded-xl px-5 py-4 shadow-sm flex flex-col items-center justify-center min-w-[110px]">
                                <span className="text-[12px] font-bold text-[#1F1F23]">D2C Store</span>
                                <span className="text-[10px] text-[#94A3B8] font-medium">eCommerce</span>
                            </div>

                            {/* Influencer (Top Right) */}
                            <div className="absolute top-0 right-12 z-10 bg-white border border-[#E2E8F0] rounded-xl px-5 py-4 shadow-sm flex flex-col items-center justify-center min-w-[110px]">
                                <span className="text-[12px] font-bold text-[#1F1F23]">Influencer</span>
                                <span className="text-[10px] text-[#94A3B8] font-medium">Seeding</span>
                            </div>

                            {/* Logistics & CS (Bottom) */}
                            <div className="absolute bottom-0 z-10 bg-white border border-[#E2E8F0] rounded-xl px-6 py-5 shadow-sm flex flex-col items-center justify-center min-w-[140px]">
                                <span className="text-[12px] font-bold text-[#1F1F23]">Logistics & CS</span>
                                <span className="text-[10px] text-[#94A3B8] font-medium">Operations</span>
                            </div>

                            {/* Connecting Lines and Pulse Dots */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                                {/* Lines */}
                                <line x1="25%" y1="20%" x2="50%" y2="50%" stroke="#1F1F23" strokeWidth="1" opacity="0.1" />
                                <line x1="75%" y1="20%" x2="50%" y2="50%" stroke="#1F1F23" strokeWidth="1" opacity="0.1" />
                                <line x1="50%" y1="80%" x2="50%" y2="50%" stroke="#1F1F23" strokeWidth="1" opacity="0.1" />

                                {/* Moving Dots */}
                                <motion.circle
                                    animate={{ cx: ["25%", "50%"], cy: ["20%", "50%"], opacity: [0, 1, 0.5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear", times: [0, 0.1, 0.9, 1] }}
                                    r="3" fill="#1F1F23"
                                />
                                <motion.circle
                                    animate={{ cx: ["75%", "50%"], cy: ["20%", "50%"], opacity: [0, 1, 0.5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear", times: [0, 0.1, 0.9, 1] }}
                                    r="3" fill="#1F1F23"
                                />
                                <motion.circle
                                    animate={{ cx: ["50%", "50%"], cy: ["80%", "50%"], opacity: [0, 1, 0.5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear", times: [0, 0.1, 0.9, 1] }}
                                    r="3" fill="#1F1F23"
                                />
                            </svg>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-[#E2E8F0] mt-16 mb-8" />

                        {/* Bottom Phase indicator */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-4 text-[#1F1F23] font-bold">
                                <span className="text-[#94A3B8] font-medium">Discover</span>
                                <ArrowRight className="w-4 h-4 text-[#E2E8F0]" />
                                <span className="text-[16px]">Launch</span>
                                <ArrowRight className="w-4 h-4 text-[#E2E8F0]" />
                                <span className="text-[#94A3B8] font-medium">Scale</span>
                            </div>
                            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">
                                <span>Launch plan</span>
                                <span>•</span>
                                <span>Channel setup</span>
                                <span>•</span>
                                <span>Ops readiness</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Closing CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] }}
                className="px-8 md:px-24 py-32 bg-[#F8F9FA] relative z-10 text-center flex flex-col items-center space-y-12"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground max-w-4xl mx-auto italic leading-tight">
                    Operations-proven infrastructure becomes an unfair advantage in expansion.
                </h2>
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-6 px-10 py-5 border-[1.5px] border-[#1F1F23] rounded-full text-xl md:text-2xl font-bold uppercase tracking-wider text-[#1F1F23] hover:bg-[#1F1F23] hover:text-white transition-all duration-300 group"
                >
                    REQUEST CONSULTATION <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
            </motion.section>

            <Footer />
        </div>
    );
}
