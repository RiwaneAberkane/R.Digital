import Header from '../components/Header/Header';

export default function Home() {
    return (
        <div className="page">
            <Header />

            <main>
                <section
                    id="home"
                    style={{
                        minHeight: '100vh',
                        display: 'grid',
                        placeItems: 'center',
                        paddingTop: 'var(--header-height)',
                    }}
                >
                    <div
                        className="container"
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        <span className="section-label">
                            R Digital
                        </span>

                        <h1
                            style={{
                                fontSize:
                                    'clamp(2.5rem, 7vw, 6rem)',
                                lineHeight: '0.95',
                                letterSpacing: '-0.06em',
                            }}
                        >
                            Fondations UI
                            <br />
                            prêtes.
                        </h1>

                        <p
                            style={{
                                maxWidth: '600px',
                                margin: '24px auto 0',
                                color:
                                    'var(--color-text-soft)',
                                fontSize:
                                    'clamp(1rem, 2vw, 1.2rem)',
                            }}
                        >
                            Le vrai Hero arrive dans le
                            prochain bloc.
                        </p>
                    </div>
                </section>

                <section
                    id="projects"
                    style={{
                        height: '40vh',
                    }}
                />

                <section
                    id="services"
                    style={{
                        height: '40vh',
                    }}
                />

                <section
                    id="about"
                    style={{
                        height: '40vh',
                    }}
                />

                <section
                    id="contact"
                    style={{
                        height: '40vh',
                    }}
                />
            </main>
        </div>
    );
}