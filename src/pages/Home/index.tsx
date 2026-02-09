import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import VantaGlobe from '@/components/VantaGlobe';

const Home = () => {
    return (
        <div className="relative min-h-screen bg-white">
            {/* HER0 — Identity */}
            <section className="container pt-32 pb-24 md:pt-48 md:pb-32">
                <div className="relative min-h-[500px] flex items-center">
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full md:w-[850px] h-full md:h-[550px] z-0 pointer-events-none">
                        <VantaGlobe />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 w-full md:w-3/5"
                    >
                        <span className="text-overline inline-block mb-4">Nexus of Innovation & Trade</span>
                        <h1 className="text-hero mb-8">
                            We connect markets.
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-xl leading-relaxed">
                            We design the points where business moves — <br className="hidden md:block" />
                            from communication to distribution.
                        </p>
                        <div className="flex gap-4">
                            <Button asChild size="lg" variant="outline" className="rounded-none px-8 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300">
                                <Link to="/contact">
                                    Let's Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 1 — Messaging (Core Business) */}
            <section className="container py-32 border-t border-border/50">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-overline">CORE BUSINESS</span>
                        <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-8 tracking-tighter leading-tight">
                            We connect businesses <br />
                            through messaging.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                                Messaging is more than delivery. <br />
                                It is infrastructure where trust and timing matter.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Built on real-world, high-volume messaging operations,
                                we design communication systems that work reliably
                                within actual commercial environments.
                            </p>
                        </div>
                        <Button asChild variant="link" className="p-0 text-accent font-bold uppercase tracking-widest hover:text-foreground transition-colors h-auto text-sm">
                            <Link to="/messaging">
                                Explore Messaging Infrastructure →
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2 — Bridge (Messaging → Market) */}
            <section className="relative min-h-[500px] py-20 flex items-center bg-black text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                    >
                        <source src="/black flow.mp4" type="video/mp4" />
                    </video>
                    {/* Overlay for better text readability if needed */}
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter leading-tight">
                            Messaging is not the end. <br />
                            It is the starting point of market entry.
                        </h2>
                        <p className="text-2xl md:text-3xl text-white/60 leading-relaxed font-light">
                            We build communication infrastructure <br className="hidden md:block" />
                            that supports real execution — <br className="hidden md:block" />
                            from engagement to distribution.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3 — Licensing & Distribution (Next Business) */}
            <section className="container py-32 border-b border-border/50">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-overline">NEXT BUSINESS</span>
                        <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-8 tracking-tighter leading-tight">
                            We bring your business <br />
                            to Korea — beyond borders.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                                We support U.S. brands entering the Korean market
                                by designing the full path — from communication to distribution and operations.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our execution experience, rooted in messaging infrastructure,
                                extends into brand licensing and market expansion.
                            </p>
                        </div>
                        <Button asChild variant="link" className="p-0 text-accent font-bold uppercase tracking-widest hover:text-foreground transition-colors h-auto text-sm">
                            <Link to="/licensing">
                                Explore Licensing & Distribution →
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 4 — Closing / Trust */}
            <section className="container py-40 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight italic">
                        "Infrastructure proven through operation <br />
                        remains stable through expansion."
                    </h2>
                    <div>
                        <Button asChild size="lg" className="rounded-none px-12 py-8 text-lg bg-foreground text-background hover:bg-accent transition-all duration-500 group">
                            <Link to="/contact">
                                Start a conversation <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
