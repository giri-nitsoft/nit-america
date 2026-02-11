import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Messaging2 = () => {
    const emailFeatures = [
        { title: "Campaign automation", desc: "Automate your customer journeys with precision timing." },
        { title: "Transactional email", desc: "Critical delivery for receipts, notifications, and alerts." },
        { title: "API integration", desc: "Seamlessly connect with your existing tech stack." },
        { title: "High-volume delivery", desc: "Reliable infrastructure that scales with your business." },
        { title: "Performance monitoring", desc: "Real-time analytics and deliverability insights." }
    ];

    const extendedChannels = [
        { name: "Email", icon: "/mail icon.png" },
        { name: "SMS", icon: "/message icon.png" },
        { name: "Kakao Business Messaging", icon: "/kako icon.png" },
        { name: "Naver Business Messaging", icon: "/naver icon.png" }
    ];

    return (
        <div className="relative min-h-screen bg-white">
            <SEO
                title="Messaging Infrastructure"
                description="Email infrastructure built for scale. Supporting marketing, transactional, and lifecycle communication through reliable email operations."
                keywords="Email Infrastructure, Messaging Solutions, Campaign Automation, Transactional Email, Korea Market Messaging"
                canonical="https://nitamerica.com/messaging2"
            />

            {/* [HERO] — Email Centric */}
            <section className="container pt-32 pb-24 md:pt-48 md:pb-32 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <span className="text-overline mb-6 block">Messaging Infrastructure</span>
                    <h1 className="text-hero mb-8">
                        Email infrastructure <br className="hidden md:block" />
                        built for scale.
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                        Supporting marketing, transactional, and lifecycle communication
                        through reliable email operations.
                    </p>
                </motion.div>
            </section>

            {/* [SECTION 1] — Email Core Capabilities */}
            <section className="py-24 border-t border-border/50">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {emailFeatures.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-4"
                            >
                                <h3 className="text-xl font-bold tracking-tight">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* [SECTION 2] — Extension (The "Beyond Email" Strategy) */}
            <section className="py-32 bg-slate-50 border-y border-border/50">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                            Beyond Email: <br />
                            Extended Messaging Capabilities
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            In addition to email operations, we support multi-channel messaging delivery,
                            including SMS and regional business messaging platforms.
                            <span className="text-foreground font-medium ml-2">
                                Multi-channel flexibility for brands operating across markets.
                            </span>
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {extendedChannels.map((channel, i) => (
                            <motion.div
                                key={channel.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 border border-border flex flex-col items-center justify-center text-center group hover:border-accent transition-colors"
                            >
                                <div className="h-16 w-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src={channel.icon}
                                        alt={channel.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h4 className="font-bold text-lg">{channel.name}</h4>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 p-8 bg-white border-l-2 border-accent"
                    >
                        <p className="text-lg text-muted-foreground italic leading-relaxed">
                            "These channels are particularly effective for brands engaging customers in the Korean market."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* [SECTION 3] — Regional Deep Dive (Subtle Korea Mention) */}
            <section className="container py-32">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Regional Infrastructure Support</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            When marketing in Korea, business messaging platforms such as Kakao and Naver
                            are widely used for promotional and transactional communication.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We provide infrastructure support for these channels as part of our
                            messaging capabilities, ensuring seamless delivery across the specific
                            digital landscape of each market.
                        </p>
                    </motion.div>
                    <div className="relative aspect-video bg-slate-100 flex items-center justify-center p-12 overflow-hidden border border-border/50">
                        <Globe className="w-32 h-32 text-slate-200" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent" />
                    </div>
                </div>
            </section>

            {/* [SECTION 4] — References (Keep for trust) */}
            <section className="py-24 border-t border-border/50 bg-slate-50/30">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-overline mb-4 block">Proven Experience</span>
                        <h2 className="text-3xl font-bold tracking-tight">Trusted by companies operating at scale.</h2>
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
                            ].map((logo, i) => (
                                <div key={i} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                                    <img
                                        src={logo}
                                        alt={`${logo.split('/').pop()?.split('logo')[0] || 'Partner'} logo`}
                                        className="max-w-full max-h-full object-contain grayscale opacity-30"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* [SECTION 5] — CTA */}
            <section className="container py-40 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto space-y-12"
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight italic">
                            Email centric, <br className="md:hidden" /> multi-channel ready.
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Let's design the right communication infrastructure for your market.
                        </p>
                    </div>
                    <div>
                        <Button asChild size="lg" className="rounded-none px-12 py-8 text-lg bg-foreground text-background hover:bg-accent transition-all duration-500 group">
                            <Link to="/contact">
                                Discuss Infrastructure <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 3rem)); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
            `}} />
        </div>
    );
};

export default Messaging2;
