import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Layout, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Messaging = () => {
    return (
        <div className="relative min-h-screen bg-white">
            {/* [HERO] — Philosophy */}
            <section className="container pt-32 pb-24 md:pt-48 md:pb-32 relative">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="text-overline uppercase tracking-[0.3em] mb-6 block">Philosophy</span>
                        <h1 className="text-hero mb-8">
                            Messaging is not a channel. <br />
                            It’s infrastructure.
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                            We operate messaging systems that businesses rely on
                            to communicate at scale — designed for reliability, timing, and real outcomes.
                        </p>
                    </motion.div>

                    <div className="w-full max-w-[380px]">
                        <div className="grid grid-cols-2 gap-4 p-4">
                            {[
                                { name: 'Kakao', src: '/kako icon.png', color: 'shadow-yellow-400/20' },
                                { name: 'Naver', src: '/naver icon.png', color: 'shadow-green-400/20' },
                                { name: 'Mail', src: '/mail icon.png', color: 'shadow-blue-400/20' },
                                { name: 'Message', src: '/message icon.png', color: 'shadow-green-500/20' },
                            ].map((icon, i) => (
                                <motion.div
                                    key={icon.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                                    className={`aspect-square bg-white rounded-[1.5rem] p-5 flex items-center justify-center shadow-2xl ${icon.color} group hover:-translate-y-2 transition-transform duration-300`}
                                >
                                    <img
                                        src={icon.src}
                                        alt={icon.name}
                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* [SECTION 1] — Our Strengths */}
            <section className="py-32 bg-slate-50">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <span className="text-overline mb-4 block">WHY US</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Built for the Korean market. <br />
                            Optimized for real operations.
                        </h2>
                    </motion.div>

                    <div className="grid gap-12 md:gap-24">
                        {/* Strength 1 */}
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div className="h-12 w-12 bg-black text-white flex items-center justify-center">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold tracking-tight">
                                    The most efficient way to <br />
                                    reach customers in Korea.
                                </h3>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-muted-foreground leading-relaxed space-y-4"
                            >
                                <p>
                                    Messaging in Korea is not optional — it is essential.
                                    We operate infrastructure designed specifically
                                    for the realities of the Korean market,
                                    where speed, reliability, and delivery certainty matter.
                                </p>
                            </motion.div>
                        </div>

                        {/* Strength 2 */}
                        <div className="grid md:grid-cols-2 gap-12 items-start pt-12 border-t border-border">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div className="h-12 w-12 bg-black text-white flex items-center justify-center">
                                    <Layout className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold tracking-tight">
                                    Operate across all major <br />
                                    messaging channels.
                                </h3>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-muted-foreground leading-relaxed space-y-4"
                            >
                                <p>
                                    We support email, SMS, Kakao messaging, and Naver messaging
                                    within a single operational structure.
                                </p>
                                <p>
                                    Our systems are built to handle transactional, lifecycle,
                                    and engagement messaging across channels — reliably and at scale.
                                </p>
                            </motion.div>
                        </div>

                        {/* Strength 3 */}
                        <div className="grid md:grid-cols-2 gap-12 items-start pt-12 border-t border-border">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div className="h-12 w-12 bg-black text-white flex items-center justify-center">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold tracking-tight">
                                    Optimized systems. <br />
                                    Optimized cost.
                                </h3>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-muted-foreground leading-relaxed space-y-4"
                            >
                                <p>
                                    We don’t believe in one-size-fits-all pricing.
                                    Our messaging infrastructure is designed
                                    to adapt to each company’s volume, use case, and growth stage —
                                    delivering optimized performance at optimized cost.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* [SECTION 2] — References */}
            <section className="py-32 overflow-hidden border-b border-border/50 bg-slate-50/50">
                <div className="container mb-24">
                    <div className="text-center">
                        <span className="text-overline mb-4 block">Proven Experience</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Trusted by companies operating at scale.
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                            Our messaging infrastructure supports real commercial operations across industries.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-12">
                    <div className="relative flex overflow-hidden py-12">
                        <div className="flex gap-12 animate-marquee whitespace-nowrap">
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
                                <div key={i} className="flex-shrink-0 w-48 h-24 flex items-center justify-center">
                                    <img src={logo} alt="Partner" className="max-w-full max-h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
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
                                <div key={`dup-${i}`} className="flex-shrink-0 w-48 h-24 flex items-center justify-center">
                                    <img src={logo} alt="Partner" className="max-w-full max-h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-50% - 3rem)); }
                    }
                    .animate-marquee {
                        animation: marquee 60s linear infinite;
                    }
                `}} />
            </section>

            {/* [SECTION 3] — CTA */}
            <section className="container py-40 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto space-y-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight italic">
                        We don't sell messaging by volume.<br />
                        We design it around how your business actually operates.
                    </h2>
                    <div>
                        <Button asChild size="lg" className="rounded-none px-12 py-8 text-lg bg-foreground text-background hover:bg-accent transition-all duration-500 group">
                            <Link to="/contact">
                                Discuss Messaging Infrastructure <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Messaging;
