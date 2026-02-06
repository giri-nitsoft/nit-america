import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-[-1] bg-grid opacity-10" />

            <section className="container pt-32 pb-24">
                <div className="max-w-screen-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-24"
                    >
                        <span className="text-overline">CONTACT</span>
                        <h1 className="text-hero mb-8">Let’s Talk.</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Interested in messaging-driven growth and market expansion?
                            We’d like to hear from you.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl"
                    >
                        <form className="space-y-12">
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-focus-within:text-accent transition-colors">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-focus-within:text-accent transition-colors">Work Email</label>
                                <input
                                    type="email"
                                    placeholder="email@company.com"
                                    className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-focus-within:text-accent transition-colors">Message</label>
                                <textarea
                                    placeholder="How can we help?"
                                    rows={4}
                                    className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors resize-none"
                                />
                            </div>
                            <Button type="submit" size="lg" className="rounded-none px-12 h-16 text-md font-bold uppercase tracking-widest">
                                Request a Conversation
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
