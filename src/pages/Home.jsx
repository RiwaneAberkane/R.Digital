import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Hero from '../sections/Hero/Hero';
import Projects from '../sections/Projects/Projects';
import About from '../sections/About/About';
import Process from '../sections/Process/Process';
import Stack from '../sections/Stack/Stack';
import Contact from '../sections/Contact/Contact';

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

                <Contact />
            </main>

            <Footer />
        </div>
    );
}