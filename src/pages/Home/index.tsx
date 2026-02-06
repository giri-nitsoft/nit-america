import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className="relative min-h-screen">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 z-[-1] bg-grid opacity-20" />
            <div className="fixed top-[-10%] right-[-10%] w-[70%] h-[70%] z-[-1] glow-orb" />

            {/* Hero Section */}
            <section className="container pt-32 pb-24 md:pt-48 md:pb-32">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1"
                    >
                        <h1 className="text-hero mb-8">
                            Messaging infrastructure, <br className="hidden md:block" />
                            proven in commerce.
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 max-w-xl">
                            Reliable messaging systems. Market expansion.
                            Execution-ready infrastructure for brands that demand certainty.
                        </p>
                        <div className="flex gap-4">
                            <Button asChild size="lg" className="rounded-none px-8">
                                <Link to="/contact">
                                    Talk to Us <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Technical Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="flex-1 max-w-[400px]"
                    >
                        <svg viewBox="0 0 400 400" className="w-full h-auto animate-[spin_60s_linear_infinite]">
                            <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-border" />
                            <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" className="text-border" />
                            <g>
                                <circle cx="200" cy="50" r="4" className="fill-accent" />
                                <circle cx="350" cy="200" r="4" className="fill-accent" />
                                <circle cx="200" cy="350" r="4" className="fill-accent" />
                                <circle cx="50" cy="200" r="4" className="fill-accent" />
                            </g>
                            <path d="M200 50 L200 350" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                            <path d="M50 200 L350 200" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                        </svg>
                    </motion.div>
                </div>
            </section>

            {/* How We Think */}
            <section className="container py-24 border-t border-border/50">
                <span className="text-overline">HOW WE THINK</span>
                <div className="grid gap-12 mt-12">
                    {["Messaging is infrastructure, not a channel.", "Outcomes matter more than volume.", "Communication precedes conversion."].map((text, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-title max-w-3xl">{text}</h2>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Logic Bridge */}
            <section className="container py-32 border-t border-border/50">
                <div className="grid md:grid-cols-2 gap-24">
                    <div className="space-y-6">
                        <span className="text-overline">CORE OPERATIONS</span>
                        <h3 className="text-2xl font-bold">Built from high-volume operations.</h3>
                        <p className="text-muted-foreground">Designed for reliability at scale. Operated in real commercial environments to ensure every message drives a decision.</p>
                    </div>
                    <div className="space-y-6">
                        <span className="text-overline">MARKET EXPANSION</span>
                        <h3 className="text-2xl font-bold">Infrastructure-first expansion.</h3>
                        <p className="text-muted-foreground">From the U.S. to Korea. We don't just distribute; we own the communication engine that builds the market center.</p>
                        <Link to="/licensing" className="inline-block font-semibold text-sm uppercase tracking-wider border-b border-border pb-1 hover:border-foreground transition-colors">
                            Explore Licensing →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Partner Ecosystem */}
            <section className="container py-24 border-t border-border/50">
                <span className="text-overline">PARTNER ECOSYSTEM</span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                    {["CORE TECH", "COMMERCE", "LOGISTICS", "COMPLIANCE"].map((label) => (
                        <div key={label} className="h-24 flex items-center justify-center border border-border/50 text-[10px] font-bold tracking-[0.2em] text-muted-foreground/50">
                            {label}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
