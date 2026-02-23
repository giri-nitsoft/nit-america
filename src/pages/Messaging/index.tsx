import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ShieldCheck,
    Zap,
    Activity,
    Lock,
    Terminal,
    Layers,
    CheckCircle2,
    Server,
    Globe,
    Mail,
    Settings,
    Database,
    LineChart,
    Cpu
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Messaging = () => {
    const liveStats = [
        { label: "Delivery Rate", value: "99.2%", icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" /> },
        { label: "Latency", value: "38ms", icon: <Zap className="w-4 h-4 text-blue-500" /> },
        { label: "Queue Depth", value: "1,247", icon: <Layers className="w-4 h-4 text-amber-500" /> },
        { label: "Compliance", value: "Active", icon: <ShieldCheck className="w-4 h-4 text-indigo-500" /> }
    ];

    const capabilities = [
        {
            title: "Secure Email Operations",
            desc: "Enterprise-grade encryption and access controls to protect sensitive communication data.",
            icon: <Lock className="w-6 h-6" />
        },
        {
            title: "Smart Delivery Routing",
            desc: "Advanced algorithms and optimized IP management for superior inbox placement strategies.",
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: "Real-Time Monitoring",
            desc: "Full end-to-end visibility into delivery performance and system health across all channels.",
            icon: <Activity className="w-6 h-6" />
        },
        {
            title: "Compliance Framework",
            desc: "Engineered specifically to meet rigorous regulatory and corporate compliance requirements.",
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            title: "Developer Integration",
            desc: "Robust REST APIs and Webhooks designed to integrate with complex enterprise workflows.",
            icon: <Terminal className="w-6 h-6" />
        },
        {
            title: "Scalable Infrastructure",
            desc: "High-performance architecture built to handle massive volume growth without compromise.",
            icon: <Server className="w-6 h-6" />
        }
    ];

    const pipelineSteps = [
        { name: "Global Providers", items: ["Gmail", "Outlook", "Yahoo"], icon: <Mail className="w-5 h-5" /> },
        { name: "Integration Layer", items: ["REST API", "Webhooks", "Auth"], icon: <Cpu className="w-5 h-5" /> },
        { name: "Processing Engine", items: ["Campaigns", "Transactions", "Queue"], icon: <Settings className="w-5 h-5" /> },
        { name: "Core Infrastructure", items: ["SMTP Relay", "IP Pools", "Routing"], icon: <Database className="w-5 h-5" /> },
        { name: "Compliance & Monitoring", items: ["Bounce Mgmt", "Log Audit", "Reputation"], icon: <LineChart className="w-5 h-5" /> }
    ];

    return (
        <div className="relative min-h-screen bg-slate-50/50">
            <SEO
                title="Enterprise Email Infrastructure"
                description="Secure and scalable email delivery infrastructure tailored to complex enterprise environments."
                keywords="Enterprise Email, Email Infrastructure, Transactional Email, High Volume Email, Compliance Email"
                canonical="https://nitamerica.com/mail"
            />

            {/* [HERO] — Enterprise Centric */}
            <section className="container pt-32 pb-24 md:pt-48 md:pb-32 relative overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-overline mb-6 block text-blue-600 font-medium tracking-widest uppercase">Infrastructure</span>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 text-slate-900 leading-[1.1]">
                            Enterprise Email <br />
                            Delivery <span className="text-blue-600 italic">Infrastructure</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                            Reliable, secure, and scalable email operations <br className="hidden md:block" />
                            tailored to complex enterprise environments.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-8 py-8 border-y border-slate-200">
                            {liveStats.map((stat) => (
                                <div key={stat.label} className="space-y-1">
                                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-tighter">
                                        {stat.icon} {stat.label}
                                    </div>
                                    <div className="text-2xl font-mono font-medium text-slate-900">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Hero Video Visual with Browser Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="rounded-2xl shadow-[-40px_40px_80px_-20px_rgba(0,0,0,0.3)] overflow-hidden border border-slate-200 bg-slate-950 flex flex-col relative w-full">
                            {/* Browser Header - Fixed height to ensure it takes its own space */}
                            <div className="h-10 bg-slate-900 border-b border-white/5 px-4 flex items-center shrink-0">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                </div>
                            </div>

                            {/* Video Area - Sized to content ratio to hide encoded bars without cropping heads */}
                            <div className="aspect-[2/1] w-full relative overflow-hidden bg-black">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover object-[center_48%]"
                                >
                                    <source src="/messaging/messagingmovie.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        {/* Decorative background glow */}
                        <div className="absolute top-[-40px] left-[-80px] right-20 bottom-[-40px] bg-blue-600/10 blur-[80px] -z-10 rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* [SECTION 2] — Built for Complex Operations */}
            <section className="py-32 bg-white">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-8">
                            Built for Complex Email Operations
                        </h2>
                        <div className="h-1 w-24 bg-blue-600 mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Transactional Systems",
                                desc: "Mission-critical system notifications, authentication, and receipt delivery with zero-margin for error.",
                                detail: "Priority 1 Routing"
                            },
                            {
                                title: "High-Volume Marketing",
                                desc: "Scalable campaign delivery infrastructure with integrated operational oversight and reputation management.",
                                detail: "Adaptive Throttling"
                            },
                            {
                                title: "Multi-System Integration",
                                desc: "Seamless orchestration across diverse enterprise tech stacks, legacy systems, and modern SaaS platforms.",
                                detail: "API Direct Connect"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 group"
                            >
                                <span className="text-[10px] uppercase tracking-widest font-medium text-blue-600 mb-4 block">{item.detail}</span>
                                <h3 className="text-2xl font-semibold mb-4 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed italic">
                                    "{item.desc}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* [SECTION 3] — Platform Capabilities */}
            <section className="py-32 bg-slate-900 text-white overflow-hidden">
                <div className="container px-4 relative">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div>
                            <span className="text-blue-500 font-medium tracking-widest uppercase mb-4 block">Core Platform</span>
                            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">
                                Enterprise Platform <br />
                                <span className="text-slate-500 italic">Capabilities</span>
                            </h2>
                        </div>
                        <p className="max-w-md text-slate-400 text-lg">
                            Designing the next generation of email infrastructure with
                            advanced security and global scalability at its core.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 border border-slate-800">
                        {capabilities.map((capability, i) => (
                            <motion.div
                                key={capability.title}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-900 p-12 hover:bg-slate-800/50 transition-all duration-500 group"
                            >
                                <div className="text-blue-500 mb-8 border border-blue-500 w-fit p-3 rounded-full group-hover:bg-blue-500 group-hover:text-slate-900 transition-colors">
                                    {capability.icon}
                                </div>
                                <h4 className="text-xl font-semibold mb-4">{capability.title}</h4>
                                <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                                    {capability.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* [SECTION 4] — The Delivery Pipeline */}
            <section className="py-40 bg-slate-50/50 relative overflow-hidden">
                {/* Visual Background Elements */}
                <div className="absolute inset-0 z-0 opacity-[0.03]"
                    style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
                />

                <div className="container px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-600 font-medium tracking-[0.2em] uppercase text-[10px] mb-4 block">System Orchestration</span>
                            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                                How Our Email Delivery <br />
                                Platform <span className="text-blue-600 italic">Works</span>
                            </h2>
                            <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full" />
                        </motion.div>
                    </div>

                    <div className="relative mt-20">
                        {/* Connecting Line - Desktop Only */}
                        <div className="hidden lg:block absolute top-[45%] left-0 w-full h-px bg-slate-200 -translate-y-1/2 z-0">
                            <motion.div
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8 relative z-10">
                            {pipelineSteps.map((step, i) => (
                                <motion.div
                                    key={step.name}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="group relative"
                                >
                                    {/* Phase Badge */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-slate-200 px-4 py-1 rounded-full shadow-sm z-30 group-hover:border-blue-500 transition-all duration-300 group-hover:-top-4">
                                        <span className="text-[9px] font-black text-slate-400 group-hover:text-blue-600 whitespace-nowrap tracking-[0.15em] uppercase">
                                            Phase 0{i + 1}
                                        </span>
                                    </div>

                                    {/* Main Card */}
                                    <div className="h-full bg-white border border-slate-200/60 p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-700 ease-out hover:-translate-y-3 flex flex-col items-center text-center group-hover:border-blue-200/50">
                                        {/* Icon Container */}
                                        <div className="mb-10 relative">
                                            <div className="absolute inset-0 bg-blue-600/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50/50 group-hover:rotate-[10deg] transition-all duration-700 ease-out relative z-10 border border-transparent group-hover:border-blue-100 shadow-inner">
                                                {React.cloneElement(step.icon as React.ReactElement, { className: "w-9 h-9" })}
                                            </div>
                                        </div>

                                        <h4 className="text-xl font-semibold text-slate-900 mb-8 px-2 group-hover:text-blue-600 transition-colors duration-300 min-h-[3rem] flex items-center">
                                            {step.name}
                                        </h4>

                                        <div className="w-full space-y-2.5">
                                            {step.items.map(item => (
                                                <div key={item} className="text-[13px] font-medium text-slate-500 flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-slate-50/50 group-hover:bg-blue-50/40 group-hover:text-slate-700 transition-all duration-300 border border-transparent group-hover:border-blue-100/30">
                                                    <div className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Desktop Connector Node */}
                                    {i < pipelineSteps.length - 1 && (
                                        <div className="hidden lg:flex absolute -right-4 xl:-right-5 top-[45%] -translate-y-1/2 z-20 items-center justify-center">
                                            <div className="w-8 h-8 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300">
                                                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600" />
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* [SECTION 5] — Console Features */}
            <section className="py-32 bg-slate-50">
                <div className="container px-4">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Enterprise Email Operations Console</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Centralized control and operational visibility for complex infrastructures.
                                    Our console provides a single pane of glass for all your messaging needs.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    "Real-time System Monitoring",
                                    "Pipeline Supervision",
                                    "API Tracking",
                                    "Security Auditing",
                                    "Multi-tenant Access",
                                    "Enterprise Logging"
                                ].map(item => (
                                    <div key={item} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg group hover:border-blue-500/50 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        <span className="text-sm font-semibold text-slate-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="/messaging/Container.png"
                                alt="Enterprise Email Operations Console"
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* [TRUST] — Logos */}
            <section className="py-24 border-t border-slate-200 bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-overline mb-4 block">Proven Experience</span>
                        <h2 className="text-3xl font-semibold tracking-tight">Trusted by companies operating at scale.</h2>
                    </div>

                    <div className="relative flex overflow-hidden">
                        <div className="flex gap-12 animate-marquee whitespace-nowrap py-4">
                            {[
                                '/logo/egnislogo.png',
                                '/logo/mongzelogo.png',
                                '/logo/andarlogo.png',
                                '/logo/osstemlogo.png',
                                '/logo/cjlogo.png',
                                '/logo/kluglogo.png',
                                '/logo/Kraftonlogo.png',
                                '/logo/northfacelogo.png',
                                '/logo/skecherslogo.png',
                                '/logo/timberlandlogo.png',
                                '/logo/vanslogo.png',
                                '/logo/xexymixlogo.png',
                                '/logo/egnislogo.png',
                                '/logo/mongzelogo.png',
                                '/logo/andarlogo.png',
                                '/logo/osstemlogo.png',
                                '/logo/cjlogo.png',
                                '/logo/kluglogo.png',
                                '/logo/Kraftonlogo.png',
                                '/logo/northfacelogo.png',
                                '/logo/skecherslogo.png',
                                '/logo/timberlandlogo.png',
                                '/logo/vanslogo.png',
                                '/logo/xexymixlogo.png',
                            ].map((logo, i) => (
                                <div key={i} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                                    <img
                                        src={logo}
                                        alt="Partner logo"
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* [SECTION 6] — CTA */}
            <section className="container py-40 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5 -z-10 blur-[100px]" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-tight">
                            Ready to Strengthen Your <br className="hidden md:block" />
                            Email <span className="text-blue-600 underline decoration-slate-300">Infrastructure</span>?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Partner with our team to design a secure, scalable, <br className="hidden md:block" /> and enterprise-grade email delivery solution.
                        </p>
                    </div>
                    <div>
                        <Button asChild size="lg" className="rounded-none px-12 py-10 text-xl font-medium bg-slate-900 text-white hover:bg-blue-600 transition-all duration-500 group shadow-2xl">
                            <Link to="/contact">
                                Request Consultation <ArrowRight className="ml-3 w-8 h-8 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 1.5rem)); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
            `}} />
        </div>
    );
};

export default Messaging;
