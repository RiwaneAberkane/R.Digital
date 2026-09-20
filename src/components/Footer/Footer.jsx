import {
    ArrowUp,
    ArrowUpRight,
} from 'lucide-react';

import './Footer.css';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="footer">
            <div className="footer__glow" />

            <div className="container">
                <div className="footer__top">
                    <a
                        href="/#hero"
                        className="footer__brand"
                    >
                        <span className="footer__logo">
                            R
                        </span>

                        <div>
                            <strong>
                                R DIGITAL
                            </strong>

                            <span>
                                Design & développement
                            </span>
                        </div>
                    </a>

                    <nav
                        className="footer__nav"
                        aria-label="Navigation du pied de page"
                    >
                        <a href="/#projects">
                            Projets
                        </a>

                        <a href="/#about">
                            À propos
                        </a>

                        <a href="/#process">
                            Processus
                        </a>

                        <a href="/#stack">
                            Technologies
                        </a>

                        <a href="/#contact">
                            Contact
                        </a>
                    </nav>

                    <a
                        href="mailto:r.digitalcorporation@gmail.com"
                        className="footer__email"
                    >
                        Me contacter

                        <ArrowUpRight
                            size={17}
                            strokeWidth={2}
                        />
                    </a>
                </div>

                <div className="footer__statement">
                    <span>
                        R DIGITAL
                    </span>

                    <h2>
                        DES IDÉES.
                        <br />

                        <em>
                            DU DESIGN.
                        </em>

                        <br />

                        DU CODE.
                    </h2>
                </div>

                <div className="footer__bottom">
                    <p>
                        © 2026 R Digital.
                        Tous droits réservés.
                    </p>

                    <span>
                        Pensé & développé avec soin.
                    </span>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="footer__top-button"
                        aria-label="Revenir en haut de la page"
                    >
                        Haut de page

                        <span>
                            <ArrowUp
                                size={16}
                                strokeWidth={2}
                            />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}