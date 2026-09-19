export default function Home() {
    return (
        <main
            style={{
                minHeight: '100vh',
                display: 'grid',
                placeItems: 'center',
            }}
        >
            <div
                style={{
                    textAlign: 'center',
                }}
            >
                <strong
                    style={{
                        color: 'var(--color-blue)',
                        letterSpacing: '0.15em',
                    }}
                >
                    R DIGITAL
                </strong>

                <h1
                    style={{
                        marginTop: '12px',
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                    }}
                >
                    Initialisation réussie.
                </h1>
            </div>
        </main>
    );
}