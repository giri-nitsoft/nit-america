import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, FileText, Server, TrendingUp, Globe, Zap } from "lucide-react";

const Licensing = () => {
    const navigate = useNavigate();

    const hubs = [
        {
            title: "NIT AMERICA",
            location: "IRVINE, CA",
            role: "Strategic Hub",
            focus: "US Operations",
            items: ["Brand discovery & trend sourcing", "Strategic networking", "Agreement & negotiation"],
            color: "text-blue-400",
            bg: "bg-blue-400/5",
            border: "border-blue-400/20"
        },
        {
            title: "NITSOFT",
            location: "SEOUL, KOREA",
            role: "Execution Hub",
            focus: "Korea Operations",
            items: ["Localized commerce IT infra", "Channel-driven distribution", "Operations & management"],
            color: "text-purple-400",
            bg: "bg-purple-400/5",
            border: "border-purple-400/20"
        }
    ];

    const processSteps = [
        {
            id: "01",
            step: "DISCOVERY",
            title: "Trend Sourcing",
            desc: "Data-driven discovery of trendy US brands through our strategic network in Irvine.",
            icon: Search
        },
        {
            id: "02",
            step: "LICENSING",
            title: "License Agreement",
            desc: "Optimized contract structures and legal review to secure sustainable market rights.",
            icon: FileText
        },
        {
            id: "03",
            step: "INFRA",
            title: "Full Operation",
            desc: "Deployment of distribution IT infrastructure, logistics, and supply chain management.",
            icon: Server
        },
        {
            id: "04",
            step: "EXPANSION",
            title: "Localization",
            desc: "Multi-channel expansion and localized branding to dominate the Korean market.",
            icon: TrendingUp
        }
    ];

    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-[-1] bg-grid opacity-10" />

            {/* Hero Section */}
            <section className="container pt-32 pb-24 border-b border-border/50">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <span className="text-overline inline-flex items-center gap-2">
                        <Globe className="h-3 w-3" /> GLOBAL VISION, LOCAL ACTION
                    </span>
                    <h1 className="text-hero mb-8">The bridge between US trends and Korea.</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We don't just broker deals; we build the entire pathway. NIT America operates as a strategic gateway,
                        securing premium US brand licenses and deploying them through our specialized execution hub in Korea.
                    </p>
                </motion.div>
            </section>

            {/* Hubs Section */}
            <section className="container py-32">
                <div className="grid md:grid-cols-2 gap-12">
                    {hubs.map((hub, i) => (
                        <motion.div
                            key={hub.title}
                            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`p-10 border ${hub.border} ${hub.bg} relative overflow-hidden group`}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Zap className={`h-24 w-24 ${hub.color}`} />
                            </div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <span className={`text-[10px] font-bold tracking-[0.2em] ${hub.color}`}>{hub.role}</span>
                                        <h2 className="text-3xl font-bold mt-2">{hub.title}</h2>
                                    </div>
                                    <span className="text-xs font-bold font-mono py-1 px-2 border border-current opacity-50">{hub.location}</span>
                                </div>
                                <div className="space-y-4">
                                    <p className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Core focus: {hub.focus}</p>
                                    <ul className="space-y-3">
                                        {hub.items.map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-sm">
                                                <div className={`h-1 w-1 rounded-full ${hub.color.replace('text', 'bg')}`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground italic">"Beyond brokerage — an integrated one-stop solution from discovery to full market expansion."</p>
                </div>
            </section>

            {/* Process Section */}
            <section className="border-y border-border/50 py-32 bg-accent/5">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <span className="text-overline uppercase tracking-[0.3em]">Operational Flow</span>
                        <h2 className="text-title">One-Stop Market Entry Solution</h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-6 group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all">
                                        <step.icon className="h-5 w-5" />
                                    </div>
                                    <div className="h-px flex-grow bg-border" />
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-xs font-bold text-accent font-mono block mb-1">STEP {step.id} — {step.step}</span>
                                        <h3 className="text-xl font-bold font-sans uppercase tracking-tight">{step.title}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.desc}
                                    </p>
                                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-accent/10 border border-accent/20 rounded text-[9px] font-bold text-accent uppercase tracking-widest">
                                        System Online
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="container py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto space-y-12"
                >
                    <h2 className="text-2xl md:text-4xl font-serif">Build your bridge to the Korean market with certain outcome.</h2>
                    <Button size="lg" className="rounded-none px-12 h-16 text-md font-bold uppercase tracking-widest" onClick={() => navigate('/contact')}>
                        Start a Partnership
                    </Button>
                </motion.div>
            </section>
        </div>
    );
};

export default Licensing;
