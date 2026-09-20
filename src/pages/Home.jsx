import { Helmet } from 'react-helmet-async';

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
            <Helmet>
                <html lang="fr" />

                <title>
                    R Digital — Développement & design digital
                </title>

                <meta
                    name="description"
                    content="R Digital conçoit des sites et expériences digitales modernes, performants et sur mesure, du design au développement."
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <meta
                    name="theme-color"
                    content="#06152c"
                />

                <meta
                    property="og:title"
                    content="R Digital — Développement & design digital"
                />

                <meta
                    property="og:description"
                    content="Sites web et expériences digitales modernes, performants et pensés sur mesure."
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />
            </Helmet>

            <Header />

            <main id="main-content">
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