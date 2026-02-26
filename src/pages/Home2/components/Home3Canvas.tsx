import { useEffect, useRef } from 'react';

export default function Home3Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const c = canvasRef.current;
        if (!c) return;
        const g = c.getContext('2d');
        if (!g) return;

        let animationFrameId: number;

        function update() {
            if (!c || !g) return;

            // Seeded random implementation to reset every frame
            let seed = 1;
            const myRandom = () => {
                seed = ((seed + 0x7ED55D16) + (seed << 12)) & 0xFFFFFFFF;
                seed = ((seed ^ 0xC761C23C) ^ (seed >>> 19)) & 0xFFFFFFFF;
                seed = ((seed + 0x165667B1) + (seed << 5)) & 0xFFFFFFFF;
                seed = ((seed + 0xD3A2646C) ^ (seed << 9)) & 0xFFFFFFFF;
                seed = ((seed + 0xFD7046C5) + (seed << 3)) & 0xFFFFFFFF;
                seed = ((seed ^ 0xB55A4F09) ^ (seed >>> 16)) & 0xFFFFFFFF;
                return (seed & 0xFFFFFFF) / 0x10000000;
            };

            c.width = 512;
            c.height = 512;
            g.strokeStyle = "rgba(120,200,255,0.09)";

            g.globalCompositeOperation = "lighter";
            g.translate(256, 256);
            const r = 256;
            const theta = new Date().getTime() * 0.00065;
            const r2 = 128 + 128 * Math.sin(new Date().getTime() * 0.001);
            g.beginPath();

            for (let i = 0; i < 3024; i++) {
                const a = myRandom() * 2 * Math.PI;
                const b = myRandom() * 2 * Math.PI;

                g.moveTo(r * Math.cos(a), r * Math.sin(a));
                g.lineTo(r2 * Math.cos(b + theta), r2 * Math.sin(b + theta));
                if (i % 256 === 0) {
                    g.stroke();
                    g.beginPath();
                }
            }
            g.stroke();

            const grad = g.createRadialGradient(0, 0, 0, 0, 0, 256);

            grad.addColorStop(0, "rgba(17, 17, 17, 0.0)");
            grad.addColorStop(Math.min(.99, r2 / 256 * 1.0), "rgba(17, 17, 17, 0.6)");
            grad.addColorStop(1, "#111111");

            g.globalCompositeOperation = "source-over";
            g.fillStyle = grad;

            g.fillRect(-256, -256, 512, 512);
            animationFrameId = requestAnimationFrame(update);
        }

        update();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-256px',
                marginLeft: '-256px'
            }}
            className="pointer-events-none z-0 opacity-90"
        />
    );
}
