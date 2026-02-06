import { motion } from "framer-motion";

const Company = () => {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-[-1] bg-grid opacity-10" />

            <section className="container pt-32 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-overline">COMPANY</span>
                    <h1 className="text-hero mb-8">Engineering the bridge.</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        NIT America is an extension of NIT Group. We combine technical messaging infrastructure with specialized market execution.
                    </p>
                </motion.div>
            </section>

            {/* Principles */}
            <section className="container py-32 border-t border-border/50">
                <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
                    {[
                        { title: "Infrastructure-first thinking", desc: "We build the foundation before the facade. Reliability is the only currency in messaging." },
                        { title: "Long-term partnerships", desc: "We operate focused on sustainable growth rather than quick transactions." },
                        { title: "Execution over speculation", desc: "We value real-world deployment and data-driven results over theory." },
                        { title: "Operational discipline", desc: "Rigorous compliance and safety standards for global scale." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-8"
                        >
                            <span className="font-serif text-5xl text-accent/60 opacity-80 leading-none">0{i + 1}</span>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Presence */}
            <section className="border-t border-border/50 py-32 bg-accent/5">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-24 items-center">
                        <div className="space-y-6">
                            <span className="text-overline">PRESENCE</span>
                            <h2 className="text-title">Operating across markets with a single principle: communication drives growth.</h2>
                        </div>
                        <div className="grid gap-4">
                            {[
                                { loc: "UNITED STATES", sub: "Operations & Strategy" },
                                { loc: "KOREA", sub: "Engineering & HQ" }
                            ].map((item) => (
                                <div key={item.loc} className="p-8 border border-border bg-background group hover:border-accent transition-colors">
                                    <strong className="block text-2xl tracking-[0.1em] mb-1 group-hover:text-accent transition-colors">{item.loc}</strong>
                                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{item.sub}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Company;
