import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
// @ts-ignore
import GLOBE from 'vanta/dist/vanta.globe.min'

interface VantaGlobeProps {
    children?: React.ReactNode
    className?: string
}

const VantaGlobe: React.FC<VantaGlobeProps> = ({ children, className }) => {
    const vantaRef = useRef<HTMLDivElement>(null)
    const vantaEffectRef = useRef<any>(null)

    useEffect(() => {
        const initVanta = () => {
            if (vantaRef.current && !vantaEffectRef.current) {
                const width = vantaRef.current.offsetWidth
                const height = vantaRef.current.offsetHeight

                if (width < 100 || height < 100) return

                (window as any).THREE = THREE
                try {
                    vantaEffectRef.current = GLOBE({
                        el: vantaRef.current,
                        THREE: THREE,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        color: 0x3b82f6,
                        color2: 0x3b82f6,
                        size: 1.0,
                        backgroundColor: 0xffffff,
                        points: 12.00,
                        maxDistance: 20.00,
                        spacing: 16.00,
                        showDots: true
                    })
                } catch (err) {
                    console.error('Vanta initialization error:', err)
                }
            }
        }

        const observer = new ResizeObserver(() => {
            if (vantaEffectRef.current) vantaEffectRef.current.resize()
        })

        if (vantaRef.current) observer.observe(vantaRef.current)

        // Give layout a moment to settle
        const timer = setTimeout(initVanta, 500)

        return () => {
            clearTimeout(timer)
            if (vantaEffectRef.current) {
                vantaEffectRef.current.destroy()
                vantaEffectRef.current = null
            }
            observer.disconnect()
        }
    }, [])

    return (
        <div ref={vantaRef} className={className} style={{ width: '100%', height: '100%' }}>
            {children}
            <style>{`
        .vanta-canvas {
          opacity: 0.5 !important;
          width: 100% !important;
          height: 100% !important;
          display: block !important;
        }
      `}</style>
        </div>
    )
}

export default VantaGlobe
