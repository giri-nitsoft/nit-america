import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xgolvary");

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
                        <h1 className="text-hero mb-8">Let's Talk.</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Interested in messaging-driven growth and market expansion?
                            We'd like to hear from you.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl"
                    >
                        {state.succeeded ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-accent/10 border border-accent p-12 rounded-sm"
                            >
                                <h2 className="text-3xl font-bold mb-4">Thank you!</h2>
                                <p className="text-lg text-muted-foreground">
                                    We've received your message and will get back to you soon.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-12">
                                <div className="space-y-2 group">
                                    <label
                                        htmlFor="name"
                                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-focus-within:text-accent transition-colors"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Your Name or Company"
                                        required
                                        className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors"
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-red-500 mt-1" />
                                </div>
                                <div className="space-y-2 group">
                                    <label
                                        htmlFor="email"
                                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-focus-within:text-accent transition-colors"
                                    >
                                        Work Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="email@company.com"
                                        required
                                        className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-red-500 mt-1" />
                                </div>
                                <div className="space-y-2 group">
                                    <label
                                        htmlFor="message"
                                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-focus-within:text-accent transition-colors"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="How can we help?"
                                        rows={4}
                                        required
                                        className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors resize-none"
                                    />
                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-red-500 mt-1" />
                                </div>
                                <div className="pt-4">
                                    <ValidationError errors={state.errors} className="text-sm text-red-500 mb-4 block" />
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={state.submitting}
                                        className="rounded-none px-12 h-16 text-md font-bold uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {state.submitting ? 'Sending...' : 'Request a Conversation'}
                                    </Button>
                                </div>
                            </form>
                        )}

                        {/* Direct Email Contact */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-16 pt-12 border-t border-border"
                        >
                            <p className="text-sm text-muted-foreground mb-2">
                                Or reach us directly at
                            </p>
                            <a
                                href="mailto:nit@nitsoft.biz"
                                className="text-lg font-medium hover:text-accent transition-colors inline-flex items-center gap-2"
                            >
                                nit@nitsoft.biz
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
