import Header from '../components/Header/Header';
import Hero from '../sections/Hero/Hero';

export default function Home() {
    return (
        <div className="page">
            <Header />

            <main>
                <Hero />

                <section
                    id="projects"
                    style={{
                        minHeight: '100vh',
                        background: '#ffffff',
                    }}
                />

                <section
                    id="about"
                    style={{
                        minHeight: '70vh',
                    }}
                />

                <section
                    id="process"
                    style={{
                        minHeight: '70vh',
                        background: '#ffffff',
                    }}
                />

                <section
                    id="contact"
                    style={{
                        minHeight: '70vh',
                    }}
                />
            </main>
        </div>
    );
}