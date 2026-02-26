
import './GlobeEffect.css';

export default function GlobeEffect({ dark = true }: { dark?: boolean }) {
    const rings = 8;
    const groups = 3;

    return (
        <div className={`globe-container ${dark ? '' : 'light-theme'}`}>
            <div className="globe-v-text">
                Messaging infrastructure <br /> that scales.
            </div>
            <div className="globe-v-wrap">
                {[...Array(groups)].map((_, gIdx) => (
                    <div key={`group-${gIdx}`} className="globe-v-group">
                        {[...Array(rings)].map((_, rIdx) => (
                            <div key={`ring-${rIdx}`} className="globe-v-ring" />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
