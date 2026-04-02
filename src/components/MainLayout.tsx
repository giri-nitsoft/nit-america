import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import RightSidebar from './RightSidebar';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const mainRef = useRef<HTMLElement>(null);
    const { pathname } = useLocation();

    // Reset scroll to top when pathname changes
    useEffect(() => {
        if (mainRef.current) {
            mainRef.current.scrollTop = 0;
        }
    }, [pathname]);

    // Check if we are on a page that should use the old top navbar or the new GNB
    // The user said "ALL pages", so we will apply it globally.
    
    return (
        <div className="h-screen bg-white text-[#1F1F23] font-sans overflow-hidden flex flex-col md:flex-row selection:bg-[#8CA2D6]/30">
            {/* Main scrollable content area */}
            <main 
                ref={mainRef} 
                className="flex-1 flex flex-col justify-start relative z-10 overflow-x-hidden overflow-y-auto md:mr-[240px] lg:mr-[330px] pb-[84px] md:pb-0 no-scrollbar"
            >
                {children}
            </main>

            {/* Fixed Right Sidebar */}
            <RightSidebar mainRef={mainRef} />
        </div>
    );
};

export default MainLayout;
