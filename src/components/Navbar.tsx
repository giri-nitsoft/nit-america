import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from "lucide-react"
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const Navbar = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    const navLinks = [
        { name: 'Messaging', path: '/messaging', shortName: 'Messaging' },
        { name: 'Licensing & Distribution', path: '/licensing', shortName: 'Licensing' },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const content = (
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
            <Link to="/" className="flex items-center shrink-0">
                {!isActive('/') && (
                    <img
                        src="/home/homebtn.png"
                        alt="NIT America"
                        className="h-6 md:h-8 w-auto"
                    />
                )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10 md:translate-x-8 lg:translate-x-16 xl:translate-x-24">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={cn(
                            "relative text-[13px] font-bold tracking-widest uppercase transition-colors py-2",
                            isActive(link.path) ? "text-[#1F1F23]" : "text-[#1F1F23]/40 hover:text-[#1F1F23]"
                        )}
                    >
                        {link.name}
                        {isActive(link.path) && (
                            <motion.div
                                layoutId="nav-active"
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#1F1F23]"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </Link>
                ))}
                <Button asChild className="rounded-full px-6 bg-[#1F1F23] text-[#F7F9FD] hover:bg-[#1F1F23]/90 h-10 transition-all font-bold text-xs tracking-widest uppercase">
                    <Link to="/contact">Request Consultation</Link>
                </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center gap-2">

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-11 w-11 flex items-center justify-center rounded-full hover:bg-slate-100 focus-ring"
                            aria-label="Open navigation menu"
                        >
                            <Menu className="h-5 w-5 text-[#1F1F23]" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[100vw] sm:w-[400px] border-l-[#CCD4E9] bg-white p-0">
                        <div className="flex flex-col h-full">
                            <div className="p-6 flex items-center justify-between border-b border-[#CCD4E9]/30">
                                <Link
                                    to="/"
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-bold tracking-tighter text-[#1F1F23]"
                                >
                                    NIT America
                                </Link>
                                {/* Sheet close is handled by the component automatically, but we ensure the header is clean */}
                            </div>
                            <nav className="flex flex-col p-8 space-y-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-4xl font-bold tracking-tight transition-all",
                                            isActive(link.path) ? "text-[#1F1F23]" : "text-[#1F1F23]/30 hover:text-[#1F1F23]"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-4xl font-bold tracking-tight transition-all",
                                        isActive('/contact') ? "text-[#1F1F23]" : "text-[#1F1F23]/30 hover:text-[#1F1F23]"
                                    )}
                                >
                                    Contact
                                </Link>

                                <div className="pt-12">
                                    <Button asChild className="w-full h-20 rounded-2xl bg-[#1F1F23] text-[#F7F9FD] text-xl font-bold shadow-lg shadow-[#1F1F23]/10">
                                        <Link to="/contact" onClick={() => setIsOpen(false)}>Request Consultation</Link>
                                    </Button>
                                </div>
                            </nav>
                            <div className="mt-auto p-8 border-t border-[#CCD4E9]/30 bg-[#F7F9FD]">
                                <p className="text-[10px] font-bold tracking-[0.2em] text-[#1F1F23]/40 uppercase">Nexus of Innovation & Trade</p>
                                <div className="mt-4 flex gap-4 text-[#1F1F23]/60 text-xs font-semibold">
                                    <Link to="/messaging" onClick={() => setIsOpen(false)} className="hover:text-[#1F1F23]">US</Link>
                                    <span className="text-[#CCD4E9]">/</span>
                                    <Link to="/licensing" onClick={() => setIsOpen(false)} className="hover:text-[#1F1F23]">KOREA</Link>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );

    const headerHeight = useTransform(scrollY, [0, 100], ["64px", "56px"]);

    return (
        <motion.nav
            style={{ height: headerHeight }}
            className={cn(
                "fixed top-0 left-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "border-b border-[#CCD4E9]/30 bg-white/90 backdrop-blur-md shadow-sm"
                    : "border-transparent bg-transparent"
            )}
        >
            {content}
        </motion.nav>
    );
}

export default Navbar
