import { Link } from 'react-router-dom';
import { ArrowRight, Globe, MessageSquare, Briefcase } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SEO from '@/components/SEO';

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <SEO
                title="NIT America | Nexus of Innovation & Trade"
                description="Messaging infrastructure that scales. Launch brands in Korea. SMS/RCS messaging built for deliverability and compliance — plus brand licensing & distribution for Korea market entry."
                keywords="NIT America, Messaging Infrastructure, Global Brand Distribution, Brand Licensing, Korea Market, Kakao, Naver"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "NIT America",
                    "url": "https://nitamerica.com",
                    "logo": "https://nitamerica.com/favicon.png",
                    "sameAs": [],
                    "description": "Messaging infrastructure that scales. Launch brands in Korea.",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Irvine",
                        "addressRegion": "CA",
                        "addressCountry": "US"
                    }
                }}
            />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background accents */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

                <div className="container relative z-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-4xl"
                        >
                            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-accent/50"></span>
                                Nexus of Innovation & Trade
                            </span>

                            <h1 className="text-5xl md:text-7xl font-semibold mb-8 tracking-tight leading-[1.1]">
                                Messaging infrastructure that scales. <br className="hidden md:block" />
                                <span className="text-muted-foreground">Launch brands in Korea.</span>
                            </h1>

                            <div className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                                <p>SMS and RCS messaging built for deliverability and compliance.</p>
                                <p>Brand licensing & distribution for Korea market entry.</p>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 mb-10">
                                <span className="px-4 py-2 bg-muted/80 backdrop-blur-sm border border-border/50 text-foreground text-sm font-medium rounded-full flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4" /> SMS/RCS Messaging
                                </span>
                                <span className="px-4 py-2 bg-muted/80 backdrop-blur-sm border border-border/50 text-foreground text-sm font-medium rounded-full flex items-center gap-2">
                                    <Globe className="w-4 h-4" /> Korea Market Entry (Licensing & Distribution)
                                </span>
                            </div>

                            <div className="flex flex-col gap-6">
                                <div>
                                    <Button asChild size="lg" className="rounded-none px-8 py-6 text-base group bg-foreground text-background hover:bg-accent hover:text-white transition-all duration-300">
                                        <Link to="/contact">
                                            Request Consultation
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                                    <Link to="/messaging" className="text-foreground font-semibold uppercase tracking-widest hover:text-accent transition-colors text-sm flex items-center group">
                                        Explore Messaging <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link to="/licensing" className="text-foreground font-semibold uppercase tracking-widest hover:text-accent transition-colors text-sm flex items-center group">
                                        Explore Brand Licensing <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative flex justify-center items-center"
                        >
                            <img src="/home/hero-globe.png" alt="Global Network Globe" className="w-full max-w-[500px] h-auto object-contain opacity-90 drop-shadow-sm mix-blend-multiply" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TRUST STRIP A */}
            <div className="border-y border-border/50 py-4 bg-background/50">
                <div className="container">
                    <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground text-center font-medium">
                        Built on real-world messaging operations and execution-ready commerce playbooks.
                    </p>
                </div>
            </div>

            {/* MESSAGING SECTION */}
            <section className="py-24 md:py-32 bg-card relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/20 skew-x-12 -z-10 hidden lg:block" />
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                                Core Infrastructure
                            </span>
                            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight leading-tight">
                                Messaging you can trust at scale
                            </h2>
                            <h3 className="text-2xl font-medium mb-8 text-muted-foreground">
                                SMS and RCS built for compliance and reporting.
                            </h3>
                            <p className="text-lg text-foreground/80 mb-10 leading-relaxed max-w-lg">
                                From authentication to lifecycle notifications, we build messaging systems that perform in real commercial environments. Compliance-ready setup (opt-in/opt-out, A2P registration) and reporting are designed in from day one.
                            </p>
                            <Link to="/messaging" className="text-foreground font-semibold uppercase tracking-widest hover:text-accent transition-colors group flex items-center text-sm">
                                Explore Messaging
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[400px] md:h-[500px] w-full bg-muted overflow-hidden flex items-center justify-center p-8"
                        >
                            {/* Abstract visual representation of messaging */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                            <div className="relative z-10 w-full max-w-sm space-y-4">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="bg-background p-6 rounded-lg shadow-sm border border-border/50 w-[85%] self-start"
                                >
                                    <div className="w-1/3 h-2 bg-muted rounded-full mb-3" />
                                    <div className="w-full h-2 bg-muted rounded-full mb-2" />
                                    <div className="w-4/5 h-2 bg-muted rounded-full" />
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="bg-accent/10 p-6 rounded-lg border border-accent/20 w-[85%] ml-auto"
                                >
                                    <div className="w-2/3 h-2 bg-accent/40 rounded-full mb-2" />
                                    <div className="w-full h-2 bg-accent/40 rounded-full" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* BRIDGE SECTION */}
            <section className="py-32 md:py-40 bg-foreground text-background text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none" />
                <div className="container max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-semibold mb-8 tracking-tight leading-[1.1]">
                            Messaging is not the end. <br className="hidden md:block" />
                            <span className="text-background/60">It's where market entry begins</span>
                        </h2>
                        <div className="w-24 h-px bg-background/20 mx-auto my-10" />
                        <p className="text-xl md:text-3xl text-background/80 leading-relaxed font-light">
                            We turn communication into conversion and retention — the foundation for scalable distribution and commerce
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* BRAND LICENSING SECTION */}
            <section className="py-24 md:py-32 relative">
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-muted/20 -skew-x-12 -z-10 hidden lg:block" />
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1 relative h-[400px] md:h-[500px] w-full bg-muted flex flex-col justify-center items-center p-8 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#8080801a_1px,transparent_100%)]"></div>
                            <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-md">
                                <div className="bg-background h-32 p-4 flex flex-col justify-end border border-border/50">
                                    <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">01</span>
                                    <span className="font-medium mt-1">Discover</span>
                                </div>
                                <div className="bg-background h-32 p-4 flex flex-col justify-end border border-border/50 mt-8">
                                    <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">02</span>
                                    <span className="font-medium mt-1">Launch</span>
                                </div>
                                <div className="col-span-2 bg-foreground text-background h-32 p-4 flex flex-col justify-end -mt-4">
                                    <span className="text-xs font-semibold text-background/50 tracking-widest uppercase">03</span>
                                    <span className="font-medium mt-1">Scale</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="order-1 lg:order-2"
                        >
                            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                                Korea Market Entry
                            </span>
                            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight leading-tight">
                                Launch in Korea — <br /> run with precision
                            </h2>
                            <h3 className="text-2xl font-medium mb-8 text-muted-foreground">
                                Brand licensing and distribution, end to end
                            </h3>
                            <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
                                We help U.S. brands enter Korea with a full-stack operating plan: licensing, eCommerce operations, and localized growth. From channel strategy to logistics and customer experience, we execute with measurable outcomes.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    { icon: Briefcase, title: "Licensing & Import Planning" },
                                    { icon: Globe, title: "eCommerce Operations (Storefront · CRM · CS)" },
                                    { icon: MessageSquare, title: "Localized Growth (Creative · Influencers · Paid)" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-muted/50 border border-border/50">
                                        <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                                        <h4 className="font-medium">{item.title}</h4>
                                    </div>
                                ))}
                            </div>

                            <Link to="/licensing" className="text-foreground font-semibold uppercase tracking-widest hover:text-accent transition-colors group flex items-center text-sm">
                                Explore Brand Licensing
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CLOSING SECTION */}
            <section className="py-32 md:py-48 text-center container border-t border-border/50 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-muted/20 rounded-full blur-3xl -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.3] italic mb-16 px-4">
                        "Operations-proven infrastructure becomes an unfair advantage in expansion"
                    </h2>
                    <Button asChild size="lg" className="rounded-none px-12 py-8 text-lg bg-foreground text-background hover:bg-accent transition-all duration-300 group">
                        <Link to="/contact">
                            Request Consultation
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
