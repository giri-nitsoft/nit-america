import './CodepenGlobe.css';

export default function CodepenGlobe() {
    return (
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <div className="cpf-wrap">
                {[...Array(4)].map((_, g) => (
                    <div key={g} className="cpf-group">
                        {[...Array(8)].map((_, h) => (
                            <div key={h} className="cpf-ring" />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
