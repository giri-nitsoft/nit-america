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
                    </div>

                    <div className="space-y-8">
                        <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                            A partner company of NIT Group
                        </h5>
                        <div className="grid grid-cols-2 gap-x-16 gap-y-4 sm:gap-x-24">
                            <ul className="space-y-4">
                                <li>
                                    <a href="https://www.nitsoft.co.kr/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold hover:text-accent transition-colors tracking-tight">
                                        NITSOFT
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.stcomm.kr/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold hover:text-accent transition-colors tracking-tight">
                                        STCOMM
                                    </a>
                                </li>
                            </ul>
                            <ul className="space-y-4">
                                <li>
                                    <a href="https://www.e-ruda.net/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold hover:text-accent transition-colors tracking-tight">
                                        ERUDA MARKETING
                                    </a>
                                </li>
                                <li>
                                    <a href="https://echomarketing.co.kr/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold hover:text-accent transition-colors tracking-tight">
                                        ECHO MARKETING
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-border/50">
                    <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-bold font-sans">
                        &copy; {new Date().getFullYear()} NIT America. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
