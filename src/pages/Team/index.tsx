import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const teamData = [
    {
        category: "Leadership",
        members: [
            {
                name: "Jin-sung Lim",
                role: "CEO & Co-Founder",
                initials: "JL",
                focus: "Strategy, partnerships, cross-border execution"
            },
            {
                name: "Tracy D'Orta",
                role: "Vice President",
                initials: "TD",
                focus: "Messaging strategy, deliverability, compliance operations"
            }
        ]
    },
    {
        category: "Team",
        members: [
            {
                name: "Woojin Jang",
                role: "Operations / Project Manager",
                initials: "WJ",
                focus: "Execution, timelines, and cross-functional delivery"
            },
            {
                name: "Tyler Xu",
                role: "Business Development",
                initials: "TX",
                focus: "Outbound outreach and pipeline development"
            },
            {
                name: "Chae woon (Ray) Park",
                role: "Partnerships Manager",
                initials: "CP",
                focus: "Partner onboarding and cross-team coordination"
            }
        ]
    }
];

const Team = () => {
    return (
        <div className="min-h-screen bg-[#FBFBFB] font-sans">
            <SEO
                title="Our Team | NIT America"
                description="Meet the cross-functional team building reliable messaging infrastructure."
                canonical="https://nitamerica.com/team"
            />

            {/* Hero Section */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-8 border-b border-gray-200 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl space-y-6"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1F23] leading-tight">
                            Meet the Team
                        </h1>
                        <p className="text-xl md:text-2xl text-[#64748B] leading-relaxed font-medium">
                            A cross-functional team building reliable messaging infrastructure.
                        </p>
                        <div className="flex items-center gap-6 pt-6 flex-wrap">
                            <div className="flex items-center gap-2 text-sm text-[#475569] font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1F1F23]"></span> Compliance-first mindset
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#475569] font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1F1F23]"></span> Execution across US & Korea
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#475569] font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1F1F23]"></span> Clear ownership & accountability
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Directory */}
            <section className="py-24 px-8">
                <div className="container mx-auto max-w-5xl space-y-24">
                    {teamData.map((group) => (
                        <div key={group.category} className="space-y-12">
                            <h2 className="text-2xl font-bold text-[#1F1F23] mb-8 border-b border-gray-200 pb-4">
                                {group.category}
                            </h2>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                                {group.members.map((member, idx) => (
                                    <motion.div
                                        key={member.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className="group relative"
                                    >
                                        <div className="flex items-start gap-6">
                                            {/* Avatar placeholder with initials */}
                                            <div className="w-20 h-20 rounded-full bg-[#F4F6F9] border border-[#E2E8F0] flex items-center justify-center text-xl font-bold text-[#1F1F23] shrink-0">
                                                {member.initials}
                                            </div>
                                            <div className="space-y-3 pt-2">
                                                <div>
                                                    <h3 className="text-xl font-bold text-[#1F1F23] group-hover:text-accent transition-colors">
                                                        {member.name}
                                                    </h3>
                                                    <p className="text-[15px] font-medium text-accent mt-1">
                                                        {member.role}
                                                    </p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-sm text-[#64748B] leading-relaxed max-w-sm">
                                                        <span className="font-semibold text-[#475569]">Focus:</span> {member.focus}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-[#1F1F23] text-white">
                <div className="container mx-auto px-8 max-w-4xl text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Need a customized solution?</h2>
                    <p className="text-lg text-slate-400">Our engineering and compliance teams are ready to help you scale.</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1F1F23] rounded-full font-bold hover:bg-slate-100 transition-colors">
                        Request Consultation <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Team;
