import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="border-t border-border/50 py-24 bg-background">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between gap-16 mb-24 text-left">
                    <div className="max-w-xs space-y-6">
                        <Link to="/" className="font-serif text-2xl font-normal tracking-tight">
                            NIT<span className="font-semibold text-accent">America</span>
                        </Link>
                        <p className="text-sm font-bold tracking-wider text-foreground">
                            Nexus of Innovation & Trade
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Connecting technology with global brand distribution. Engineered for scale, proven in commerce.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-16 sm:gap-24">
                        <div className="space-y-6">
                            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">Messaging</h5>
                            <ul className="space-y-4">
                                <li><Link to="/messaging" className="text-sm hover:text-accent transition-colors">Core Infrastructure</Link></li>
                                <li><Link to="/licensing" className="text-sm hover:text-accent transition-colors">Licensing & Distribution</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">Company</h5>
                            <ul className="space-y-4">
                                <li><Link to="/company" className="text-sm hover:text-accent transition-colors">Our Foundation</Link></li>
                                <li><Link to="/contact" className="text-sm hover:text-accent transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-border/50">
                    <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-bold font-sans">
                        &copy; {new Date().getFullYear()} NIT America. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link to="#" className="text-[10px] text-muted-foreground/60 hover:text-foreground uppercase tracking-widest font-bold">Privacy Policy</Link>
                        <Link to="#" className="text-[10px] text-muted-foreground/60 hover:text-foreground uppercase tracking-widest font-bold">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
