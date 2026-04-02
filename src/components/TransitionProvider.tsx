import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface TransitionContextType {
    triggerTransition: (path: string, color: string, label: string) => void;
    isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const usePageTransition = () => {
    const context = useContext(TransitionContext);
    if (!context) {
        throw new Error('usePageTransition must be used within a TransitionProvider');
    }
    return context;
};

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [transitionConfig, setTransitionConfig] = useState<{ isVisible: boolean; color: string; label: string }>({
        isVisible: false,
        color: '#ffffff',
        label: ''
    });
    
    const navigate = useNavigate();
    const location = useLocation();

    // Outro animation when path changes (including navigation to the same path via key change)
    useEffect(() => {
        if (transitionConfig.isVisible) {
            const timer = setTimeout(() => {
                setTransitionConfig(prev => ({ ...prev, isVisible: false }));
            }, 60); // Faster outro
            return () => clearTimeout(timer);
        }
    }, [location.pathname, location.key]);

    const triggerTransition = (path: string, color: string, label: string) => {
        if (transitionConfig.isVisible) return;

        setTransitionConfig({ isVisible: true, color, label });
        
        // Safety fallback: if navigation doesn't trigger a dismissal for some reason,
        // force dismiss after 1.5s to prevent stuck overlay.
        const safetyTimer = setTimeout(() => {
            setTransitionConfig(prev => ({ ...prev, isVisible: false }));
        }, 1500);

        setTimeout(() => {
            navigate(path);
        }, 500);

        return () => clearTimeout(safetyTimer);
    };

    return (
        <TransitionContext.Provider value={{ triggerTransition, isTransitioning: transitionConfig.isVisible }}>
            {children}
            {/* Global Overlay at the Provider level */}
            <AnimatePresence mode="popLayout">
                {transitionConfig.isVisible && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[1000000] flex items-center justify-center pointer-events-none will-change-transform"
                        style={{ backgroundColor: transitionConfig.color }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="text-white text-[32px] md:text-[64px] font-plateia tracking-[0.2em] uppercase p-8 text-center"
                            style={{ 
                                color: transitionConfig.color === '#FFFFFF' || transitionConfig.color === '#DDE9F9' ? '#111111' : '#FFFFFF' 
                            }}
                        >
                            {transitionConfig.label}
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </TransitionContext.Provider>
    );
};
