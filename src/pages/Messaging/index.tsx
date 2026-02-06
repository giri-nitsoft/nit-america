import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Messaging = () => {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-[-1] bg-grid opacity-10" />

            <section className="container pt-32 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-overline">INFRASTRUCTURE</span>
                    <h1 className="text-title mb-8 max-w-4xl">Messaging is not a channel. It’s infrastructure.</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        We operate messaging systems that businesses rely on to communicate at scale.
                        Designed for reliability, timing, and conversion.
                    </p>
                </motion.div>
            </section>

            {/* Philosophy Section */}
            <section className="border-t border-b border-border/50 py-32 bg-accent/5">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-title">Messages are where decisions happen.</h2>
                        <p className="text-muted-foreground max-w-xl text-lg">
                            Purchases, confirmations, retention — all start with communication.
                            We treat messaging as a foundation, not a campaign tool.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Focus Area */}
            <section className="container py-32">
                <div className="grid md:grid-cols-2 gap-24">
                    <div className="space-y-8">
                        <span className="text-overline">SYSTEMS</span>
                        <div className="space-y-4">
                            {["Email delivery infrastructure", "API-based messaging", "Engagement flows"].map((item) => (
                                <h3 key={item} className="font-serif text-3xl">{item}</h3>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8">
                        <span className="text-overline">OUTCOMES</span>
                        <div className="space-y-4">
                            {["Transactional certainty", "Lifecycle retention", "Growth orchestration"].map((item) => (
                                <h3 key={item} className="font-serif text-3xl">{item}</h3>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-24 border-t border-border/50 text-center">
                <Button size="lg" className="rounded-none px-12" onClick={() => window.location.href = '/contact'}>
                    Request a Conversation
                </Button>
            </section>
        </div>
    );
};

export default Messaging;
