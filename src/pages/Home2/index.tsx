import { motion, useScroll, useTransform, useMotionTemplate, Variants } from "framer-motion";
import { Asterisk, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
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
                            <Button asChild size="lg" className="rounded-none px-10 py-7 text-lg bg-foreground text-background hover:bg-accent transition-all duration-300 pointer-events-auto">
                                <Link to="/contact">
                                    Request Consultation
                                </Link>
                            </Button>
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="px-8 md:px-24 py-32 bg-[#F8F9FA] relative z-10"
            >
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                    <div className="space-y-8 text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-foreground max-w-md">
                            Messaging you can trust at scale.
                        </h2>
                    </div>
                    <div className="space-y-12 text-left">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-foreground">
                                SMS and RCS built for compliance and reporting.
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                From authentication to lifecycle notifications, we build messaging systems that perform in real commercial environments. Compliance-ready setup (opt-in/opt-out, A2P registration) and reporting are designed in from day one.
                            </p>
                        </div>

                        {/* Messaging Architecture Diagram */}
                        <div className="p-8 bg-white border border-border/50 rounded-lg shadow-sm">
                            <div className="relative h-48 flex items-center justify-between gap-4">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-20 h-14 bg-muted/30 border border-border flex items-center justify-center text-[10px] font-bold uppercase tracking-tighter text-center px-1">App/CRM</div>
                                </div>
                                <div className="flex-grow h-px bg-border relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-border" />
                                </div>
                                <div className="w-24 h-16 bg-foreground text-background flex items-center justify-center text-[10px] font-bold uppercase text-center px-2">NIT Messaging</div>
                                <div className="flex-grow h-px bg-border relative">
                                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex items-center justify-between px-2">
                                        <span className="text-[8px] uppercase font-bold text-muted-foreground -mt-4">RCS?</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="w-16 h-8 bg-muted/20 border border-border flex items-center justify-center text-[8px] font-bold uppercase opacity-50">RCS</div>
                                    <div className="w-16 h-8 bg-muted/20 border border-border flex items-center justify-center text-[8px] font-bold uppercase opacity-50">SMS</div>
                                </div>
                                <div className="flex-grow h-px bg-border opacity-30" />
                                <div className="w-20 h-14 bg-muted/30 border border-border flex items-center justify-center text-[10px] font-bold uppercase tracking-tighter text-center">Carrier</div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-border/50 space-y-4 text-left">
                                <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Real-time Analytics</div>
                                <div className="flex justify-between items-center text-xs">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        <span className="text-muted-foreground">Delivered</span>
                                        <span className="font-bold">98.7%</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                        <span className="text-muted-foreground">Failed</span>
                                        <span className="font-bold">0.8%</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                        <span className="text-muted-foreground">Opt-out</span>
                                        <span className="font-bold">0.5%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/mail" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors group">
                            Explore Messaging <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
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
                                <h2 key={i} className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white italic">
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
                                <h2 key={i} className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white italic">
                                    It's where market entry begins.
                                </h2>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Korea Market Entry Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="px-8 md:px-24 py-32 bg-white relative z-10"
            >
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 text-left">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-foreground max-w-sm text-left">
                            Launch in Korea — run with precision.
                        </h2>
                    </div>
                    <div className="space-y-12 text-left">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-foreground">
                                Brand licensing and distribution, end to end.
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We help U.S. brands enter Korea with a full-stack operating plan: licensing, eCommerce operations, and localized growth. From channel strategy to logistics and customer experience, we execute with measurable outcomes.
                            </p>

                            <ul className="space-y-4 pt-4">
                                {["Licensing & Import Planning", "eCommerce Operations (Storefront · CRM · CS)", "Localized Growth (Creative · Influencers · Paid)"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-foreground font-medium">
                                        <span className="w-6 h-px bg-foreground/30" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Korea Launch Playbook Diagram */}
                        <div className="p-8 bg-[#F8F9FA] border border-border/50 rounded-lg">
                            <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-12 text-left">Korea Launch Playbook</div>
                            <div className="relative h-48 flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full bg-white border-2 border-foreground flex items-center justify-center z-10 shadow-sm text-center px-2">
                                    <div className="text-[10px] font-bold uppercase leading-tight">Korea<br />Entry</div>
                                </div>

                                {/* Spokes */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                    <div className="w-24 h-12 bg-white border border-border shadow-sm flex items-center justify-center text-[8px] font-bold uppercase text-center px-2">D2C Store<br />eCommerce Platform</div>
                                    <div className="h-8 w-px bg-border/50" />
                                </div>

                                <div className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center">
                                    <div className="w-8 h-px bg-border/50" />
                                    <div className="w-24 h-12 bg-white border border-border shadow-sm flex items-center justify-center text-[8px] font-bold uppercase text-center px-2">Influencer Seeding<br />Brand Awareness</div>
                                </div>

                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                    <div className="h-8 w-px bg-border/50" />
                                    <div className="w-24 h-12 bg-white border border-border shadow-sm flex items-center justify-center text-[8px] font-bold uppercase text-center px-2">Logistics & CS<br />Operations Support</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 pt-4 border-t border-border/50 text-left">
                            <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground flex gap-4">
                                <span>Discover</span>
                                <span className="opacity-30">→</span>
                                <span>Launch</span>
                                <span className="opacity-30">→</span>
                                <span>Scale</span>
                            </div>
                            <Link to="/licensing" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors group">
                                Explore Brand Licensing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Closing CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="px-8 md:px-24 py-32 bg-[#F8F9FA] relative z-10 text-center flex flex-col items-center space-y-12"
            >
                <div className="w-full h-px bg-border/50 max-w-6xl mx-auto" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground max-w-4xl mx-auto italic leading-tight">
                    Operations-proven infrastructure becomes an unfair advantage in expansion.
                </h2>
                <Button asChild size="lg" className="rounded-none px-12 py-8 text-lg bg-foreground text-background hover:bg-accent transition-all duration-300">
                    <Link to="/contact">
                        Request Consultation
                    </Link>
                </Button>
            </motion.section>

            <Footer />
        </div>
    );
}
