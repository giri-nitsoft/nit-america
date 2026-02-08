import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import VantaGlobe from '@/components/VantaGlobe';

const Home = () => {
    return (
        <div className="relative min-h-screen bg-white">
            {/* Background Decorative Elements removed for clean minimalist look */}

            {/* Hero Section */}
            <section className="container pt-32 pb-24 md:pt-48 md:pb-32">
                <div className="relative min-h-[500px] flex items-center">
                    {/* Layer 0: Wide Aspect Ratio Globe Container (800x500) */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full md:w-[850px] h-full md:h-[550px] z-0 pointer-events-none">
                        <VantaGlobe />
                    </div>

                    {/* Layer 1: Foreground Text (Overlapping) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 w-full md:w-3/5"
                    >
                        <span className="text-overline inline-block mb-4">Nexus of Innovation & Trade</span>
                        <div className="relative inline-block">
                            <h1 className="text-hero mb-8 whitespace-nowrap">
                                Messaging infrastructure, <br />
                                proven in commerce.
                            </h1>
                        </div>
                        <p className="text-xl text-muted-foreground mb-12 max-w-xl">
                            Connecting technology with global brand distribution.
                            Reliable messaging systems for brands that demand certainty and market expansion.
                        </p>
                        <div className="flex gap-4">
                            <Button asChild size="lg" variant="outline" className="rounded-none px-8 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300">
                                <Link to="/contact">
                                    Talk to Us <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
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
                            <h2 className="text-title whitespace-nowrap">{text}</h2>
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
