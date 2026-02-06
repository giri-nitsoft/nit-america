import { Link, useLocation } from 'react-router-dom'
import { Menu } from "lucide-react"
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

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Messaging', path: '/messaging' },
        { name: 'Licensing & Distribution', path: '/licensing' },
        { name: 'Company', path: '/company' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <span className="font-serif text-2xl font-normal tracking-tight">
                        NIT<span className="font-semibold text-accent">America</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                isActive(link.path) ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button asChild variant="default" className="rounded-none px-6">
                        <Link to="/contact">Contact</Link>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col space-y-4 mt-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={cn(
                                            "text-lg font-medium transition-colors hover:text-primary",
                                            isActive(link.path) ? "text-primary" : "text-muted-foreground"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button asChild variant="default" className="w-full mt-4 rounded-none">
                                    <Link to="/contact">Contact</Link>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
