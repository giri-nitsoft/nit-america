import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, Variants, AnimatePresence } from "framer-motion";
import { Asterisk, ArrowRight, Plus, X, Menu } from "lucide-react";
import { Link } from 'react-router-dom';
import Typewriter from "./components/Typewriter";
import CrystalOrb from "./components/CrystalOrb";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Home2() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.25,
            rootMargin: "0px 0px -10% 0px"
        });

        const revealElements = document.querySelectorAll('[data-reveal], [data-svg-draw]');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { scrollY } = useScroll();
    const logoScale = useTransform(scrollY, [0, 400], isMobile ? [1, 0.75] : [1, 0.32]);
    const logoY = useTransform(scrollY, [0, 400], [60, 0]);
    const logoX = useTransform(scrollY, [0, 400], [0, 0]);

    const navOpacity = useTransform(scrollY, [150, 300], [0, 1]);
    const navBorderAlpha = useTransform(scrollY, [150, 300], [0, 0.1]);
    const navBorder = useMotionTemplate`rgba(0,0,0,${navBorderAlpha})`;

    // MENU + button scroll linked transforms
    const menuButtonOpacity = useTransform(scrollY, [0, 100], [1, 0]);
    const menuButtonY = useTransform(scrollY, [0, 100], [35, 20]);

    const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);
    const textY = useTransform(scrollY, [0, 200], [0, -50]);

    const orbOpacity = useTransform(scrollY, [0, 300], [0.4, 0]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.9,
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
                    <div className="w-full h-full flex items-center justify-between px-6 sm:px-8 md:px-24">
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
                            <Link to="/" className="flex flex-col items-start gap-1">
                                <div className="w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px] flex items-center justify-start">
                                    <img
                                        src="/home/homebtn.png"
                                        alt="NIT America"
                                        className="max-w-full h-auto object-contain"
                                    />
                                </div>
                                <motion.span
                                    style={{ opacity: useTransform(scrollY, [0, 100], [1, 0]) }}
                                    className="text-accent font-semibold tracking-[0.2em] uppercase text-[10px] sm:text-sm ml-2 sm:ml-4"
                                >
                                    Nexus of Innovation & Trade
                                </motion.span>
                            </Link>
                        </motion.div>

                        {/* MENU + Button */}
                        <motion.div
                            style={{ opacity: menuButtonOpacity, y: menuButtonY }}
                            className="pointer-events-auto"
                        >
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className="group flex items-center justify-center sm:gap-2 bg-black text-white p-2.5 sm:px-5 sm:py-2.5 rounded-full hover:bg-[#1a1a1a] transition-all duration-300 shadow-sm"
                            >
                                <span className="hidden sm:block text-[13px] font-bold tracking-widest uppercase ml-1">Menu</span>
                                <Plus className="hidden sm:block w-4 h-4 transition-transform group-hover:rotate-90" />
                                <Menu className="sm:hidden w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                </header>

                {/* Slide-in Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMenuOpen(false)}
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                            />
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl p-12 flex flex-col items-start"
                            >
                                <div className="w-full flex justify-end mb-16">
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                    >
                                        <X className="w-8 h-8 text-[#1F1F23]" />
                                    </button>
                                </div>

                                <nav className="flex flex-col space-y-8 w-full">
                                    {[
                                        { name: 'Messaging', path: '/messaging' },
                                        { name: 'Licensing & Distribution', path: '/licensing' },
                                        { name: 'Contact', path: '/contact' }
                                    ].map((link, i) => (
                                        <motion.div
                                            key={link.path}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + i * 0.1 }}
                                        >
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="text-4xl font-bold text-[#1F1F23] hover:text-accent transition-colors tracking-tight"
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                <div className="mt-auto pt-12 border-t border-slate-100 w-full">
                                    <p className="text-sm text-[#94A3B8] font-medium tracking-wide uppercase">NIT America</p>
                                    <p className="text-xs text-[#94A3B8] mt-2">Nexus of Innovation & Trade</p>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Hero Section */}
                <section className="relative h-screen flex flex-col justify-end items-center md:items-end px-6 sm:px-8 md:px-24 pb-20 sm:pb-32 overflow-hidden">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ opacity: textOpacity, y: textY }}
                        className="max-w-full text-center md:text-right"
                    >
                        <div className="overflow-hidden py-1">
                            <motion.h2
                                variants={itemVariants}
                                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A]"
                            >
                                <Typewriter text="Messaging" minWidth="8ch" typeSpeed={140} deleteSpeed={90} /> infrastructure
                            </motion.h2>
                        </div>
                        <div className="overflow-hidden py-1">
                            <motion.h2
                                variants={itemVariants}
                                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A]"
                            >
                                that scales.
                            </motion.h2>
                        </div>

                        <div className="h-4 md:h-12" />

                        <div className="overflow-hidden py-1">
                            <motion.div
                                variants={itemVariants}
                                className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A] flex items-center justify-center md:justify-end gap-2 md:gap-6"
                            >
                                <span>Launch</span>
                                <span className="inline-block w-12 h-6 md:w-32 md:h-16 bg-black rounded-full relative overflow-hidden" aria-hidden="true">
                                    <motion.span
                                        animate={{
                                            x: isMobile ? [-12, 12] : [-40, 40],
                                            rotate: [0, 360]
                                        }}
                                        transition={{
                                            duration: 3.2,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <Asterisk className="w-4 h-4 md:w-[42px] md:h-[42px] text-white" />
                                    </motion.span>
                                </span>
                                <span>brands</span>
                            </motion.div>
                        </div>
                        <div className="overflow-hidden py-1">
                            <motion.p
                                variants={itemVariants}
                                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A]"
                            >
                                in Korea.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-8 sm:mt-12 flex justify-center md:justify-end"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 sm:gap-3 text-base sm:text-2xl md:text-[40px] font-bold uppercase tracking-tight text-[#1F1F23] hover:text-accent transition-all duration-300 group pointer-events-auto"
                            >
                                REQUEST CONSULTATION <ArrowRight className="w-4 h-4 sm:w-8 sm:h-8 md:w-[42px] md:h-[42px] group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Bottom-left Decorative Animation & Scroll Indicator */}
                    <div className="absolute bottom-0 left-0 w-full pointer-events-none z-20">
                        <div className="container relative h-[400px]">
                            {/* Spinning Orb Animation with Scroll Fade */}
                            <motion.div
                                style={{ opacity: orbOpacity }}
                                className="absolute bottom-[50px] left-[-280px] md:left-[-180px]"
                            >
                                <CrystalOrb />
                            </motion.div>

                            <div className="absolute bottom-12 left-0">
                                <motion.div
                                    style={{ opacity: orbOpacity }}
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
                    </div>
                </section>
            </div>



            {/* SECTION B - What we do */}
            <section className="section-padding bg-[#F7F9FD] relative z-10">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center max-w-5xl mx-auto space-y-4 mb-16 md:mb-24">
                        {/* Main Section Title */}
                        <h2 data-reveal className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold tracking-tight text-[#1F1F23] leading-tight uppercase">
                            WHAT WE DO
                        </h2>

                        {/* Slogan as Subtitle */}
                        <p data-reveal data-stagger="1" className="text-xl md:text-2xl font-medium tracking-tight text-[#1F1F23]/60 leading-relaxed max-w-5xl mx-auto">
                            <span className="md:whitespace-nowrap">We help brands enter Korea end to end—licensing, operations, and localized growth.</span><br />
                            Plus messaging infrastructure designed for compliance and reliability.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 md:gap-0 relative">
                        {/* Vertical Divider (Desktop) */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#CCD4E9]" />

                        {/* Left Column: Messaging */}
                        <div className="md:pr-12 md:pb-0 pb-12 border-b md:border-b-0 border-[#CCD4E9] flex flex-col items-start space-y-6">
                            <h3 data-reveal data-stagger="2" className="text-3xl font-bold text-[#1F1F23]">Messaging</h3>
                            <p data-reveal data-stagger="3" className="text-[#1F1F23]/80 text-lg leading-relaxed max-w-md font-medium">
                                SMS and RCS built for compliance, deliverability, and reporting.
                            </p>
                            <Link
                                to="/messaging"
                                data-reveal data-stagger="4"
                                className="inline-flex items-center text-[#1F1F23] text-sm font-bold transition-all active:translate-y-[1px] group focus-visible:ring-2 focus-visible:ring-[#1F1F23] focus-visible:outline-none rounded-sm"
                            >
                                <span className="group-hover:underline underline-offset-4 decoration-[#CCD4E9]">Explore Messaging</span>
                                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>

                        {/* Right Column: Brand Licensing */}
                        <div className="md:pl-12 pt-12 md:pt-0 flex flex-col items-start space-y-6">
                            <h3 data-reveal data-stagger="2" className="text-3xl font-bold text-[#1F1F23]">Brand Licensing</h3>
                            <p data-reveal data-stagger="3" className="text-[#1F1F23]/80 text-lg leading-relaxed max-w-md font-medium">
                                End-to-end licensing & distribution for Korea market entry—operated with precision.
                            </p>
                            <Link
                                to="/licensing"
                                data-reveal data-stagger="4"
                                className="inline-flex items-center text-[#1F1F23] text-sm font-bold transition-all active:translate-y-[1px] group focus-visible:ring-2 focus-visible:ring-[#1F1F23] focus-visible:outline-none rounded-sm"
                            >
                                <span className="group-hover:underline underline-offset-4 decoration-[#CCD4E9]">Explore Brand Licensing</span>
                                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION C - Who we are & People Preview */}
            <section className="section-padding bg-[#EBEFF7] relative z-10">
                <div className="container mx-auto max-w-5xl space-y-20">
                    {/* Brand Identity */}
                    <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
                        <h2 data-reveal className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold tracking-tight text-[#1F1F23] leading-tight uppercase">WHO WE ARE</h2>
                        <div className="space-y-6 md:space-y-8">
                            <p data-reveal className="text-base md:text-xl text-[#1F1F23]/80 leading-relaxed font-medium mx-auto max-w-2xl">
                                One team across the US and Korea.<br />
                                We plan with precision and operate end to end.
                            </p>

                            <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
                                {["Execution-first", "Compliance by default", "Clear ownership"].map((principle, idx) => (
                                    <div
                                        key={principle}
                                        data-reveal
                                        style={{ transitionDelay: `${70 * idx}ms` }}
                                        className="px-4 py-2 min-h-[44px] flex items-center border border-[#CCD4E9] rounded-full bg-white/40 text-[11px] font-bold tracking-widest uppercase text-[#1F1F23]"
                                    >
                                        {principle}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* People Preview - Unified List (Synced with /team) */}
                    <div className="space-y-12">
                        <div className="space-y-1 text-center">
                            <p data-reveal data-stagger="1" className="text-[#1F1F23]/60 text-sm font-bold tracking-tight">
                                Meet the team behind the execution.
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                                {[
                                    {
                                        name: "Jin-sung Lim",
                                        role: "CEO & Co-Founder",
                                        initials: "JL",
                                        focus: "Leads strategy, partnerships, and cross-border operations."
                                    },
                                    {
                                        name: "Tracy D'Orta",
                                        role: "Vice President",
                                        initials: "TD",
                                        focus: "Owns messaging strategy, deliverability, and compliance operations."
                                    },
                                    {
                                        name: "Chae woon (Ray) Park",
                                        role: "Partnerships Manager",
                                        initials: "CP",
                                        focus: "Supports partner onboarding and day-to-day coordination."
                                    },
                                    {
                                        name: "Tyler Xu",
                                        role: "Business Development",
                                        initials: "TX",
                                        focus: "Builds pipeline through outbound and partner outreach."
                                    },
                                    {
                                        name: "Woojin Jang",
                                        role: "Operations / Project Manager",
                                        initials: "WJ",
                                        focus: "Drives execution, timelines, and cross-functional delivery."
                                    }
                                ].map((member, i) => (
                                    <div
                                        key={member.name}
                                        data-reveal
                                        style={{ transitionDelay: `${i * 80}ms` }}
                                        className="group relative"
                                    >
                                        <div className="flex items-start gap-6">
                                            {/* Avatar placeholder with initials */}
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-xl font-bold text-[#1F1F23] shrink-0 shadow-sm transition-transform group-hover:scale-105">
                                                {member.initials}
                                            </div>
                                            <div className="space-y-2 pt-1 md:pt-2">
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#1F1F23] group-hover:underline underline-offset-4 decoration-[#CCD4E9]">
                                                        {member.name}
                                                    </h3>
                                                    <p className="text-[14px] font-bold text-[#3B82F6] mt-0.5 tracking-tight">
                                                        {member.role}
                                                    </p>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[13px] text-[#64748B] leading-relaxed max-w-sm">
                                                        {member.focus}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION E - Final CTA */}
            <section className="w-full bg-[#1F1F23] text-[#F7F9FD] py-20 md:py-32 relative z-10 flex flex-col items-center justify-center text-center px-6">
                <div className="space-y-8 max-w-4xl mx-auto flex flex-col items-center">
                    <div className="space-y-4">
                        <h2 data-reveal className="text-[clamp(2.25rem,8vw,4.5rem)] font-bold tracking-tight whitespace-nowrap">Plan. Execute. Scale.</h2>
                        <p data-reveal data-stagger="1" className="text-[#F7F9FD]/70 text-base md:text-xl font-medium">A clear rollout plan across licensing and messaging.</p>
                    </div>

                    <Link
                        to="/contact"
                        data-reveal
                        style={{ transitionDelay: '120ms' }}
                        className="inline-flex items-center justify-center h-12 min-w-[200px] px-8 rounded-[24px] bg-[#F7F9FD] text-[#1F1F23] text-sm font-bold tracking-wide hover:-translate-y-[1px] hover:bg-white transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                    >
                        Request Consultation
                    </Link>

                    <p data-reveal data-stagger="2" className="text-[#F7F9FD]/40 text-xs font-medium uppercase tracking-widest mt-2">
                        US & Korea execution team
                    </p>
                </div>
            </section>

            <Footer />
        </div >
    );
}
