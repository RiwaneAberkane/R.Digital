import Header from '../components/Header/Header';

import Hero from '../sections/Hero/Hero';
import Projects from '../sections/Projects/Projects';
import About from '../sections/About/About';
import Process from '../sections/Process/Process';
import Stack from '../sections/Stack/Stack';

export default function Home() {
    return (
        <div className="page">
            <Header />

            <main>
                <Hero />

                <Projects />

                <About />

                <Process />

                <Stack />

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