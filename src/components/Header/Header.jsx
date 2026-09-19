import { useEffect, useState } from 'react';
import {
    ArrowRight,
    BriefcaseBusiness,
    House,
    Mail,
    Menu,
    PanelsTopLeft,
    UserRound,
    X,
} from 'lucide-react';

import './Header.css';

const navigationItems = [
    {
        label: 'Accueil',
        href: '/#home',
        icon: House,
    },
    {
        label: 'Projets',
        href: '/#projects',
        icon: BriefcaseBusiness,
    },
    {
        label: 'Processus',
        href: '/#process',
        icon: PanelsTopLeft,
    },
    {
        label: 'À propos',
        href: '/#about',
        icon: UserRound,
    },
    {
        label: 'Contact',
        href: '/#contact',
        icon: Mail,
    },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }

        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="header">
                <div className="header__container container">
                    <a
                        className="header__brand"
                        href="/#home"
                        aria-label="R Digital - Accueil"
                    >
                        <span className="header__logo-mark">
                            R
                        </span>

                        <span className="header__logo-text">
                            R DIGITAL
                        </span>
                    </a>

                    <nav
                        className="header__nav"
                        aria-label="Navigation principale"
                    >
                        {navigationItems.map((item) => (
                            <a
                                key={item.label}
                                className="header__nav-link"
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="header__actions">
                        <a
                            className="header__contact"
                            href="mailto:r.digitalcorporation@gmail.com"
                        >
                            <span>Discutons</span>

                            <ArrowRight
                                size={17}
                                strokeWidth={2}
                            />
                        </a>

                        <button
                            type="button"
                            className="header__menu-button"
                            aria-label="Ouvrir le menu"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Menu
                                size={24}
                                strokeWidth={2}
                            />
                        </button>
                    </div>
                </div>
            </header>

            <div
                id="mobile-menu"
                className={`mobile-menu ${isMenuOpen
                        ? 'mobile-menu--open'
                        : ''
                    }`}
                aria-hidden={!isMenuOpen}
            >
                <div className="mobile-menu__top">
                    <a
                        className="header__brand"
                        href="/#home"
                        onClick={closeMenu}
                    >
                        <span className="header__logo-mark">
                            R
                        </span>

                        <span className="header__logo-text">
                            R DIGITAL
                        </span>
                    </a>

                    <button
                        type="button"
                        className="mobile-menu__close"
                        aria-label="Fermer le menu"
                        onClick={closeMenu}
                    >
                        <X
                            size={24}
                            strokeWidth={2}
                        />
                    </button>
                </div>

                <nav
                    className="mobile-menu__nav"
                    aria-label="Navigation mobile"
                >
                    {navigationItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                className="mobile-menu__link"
                                onClick={closeMenu}
                            >
                                <span className="mobile-menu__icon">
                                    <Icon
                                        size={20}
                                        strokeWidth={1.8}
                                    />
                                </span>

                                <span>
                                    {item.label}
                                </span>
                            </a>
                        );
                    })}
                </nav>

                <a
                    href="mailto:r.digitalcorporation@gmail.com"
                    className="mobile-menu__cta"
                    onClick={closeMenu}
                >
                    <span>Discutons</span>

                    <ArrowRight
                        size={18}
                        strokeWidth={2}
                    />
                </a>

                <div className="mobile-menu__statement">
                    <span>
                        Des idées
                    </span>

                    <strong>
                        en réalité.
                    </strong>
                </div>

                <div className="mobile-menu__footer">
                    <a
                        href="mailto:r.digitalcorporation@gmail.com"
                    >
                        r.digitalcorporation@gmail.com
                    </a>
                </div>
            </div>
        </>
    );
}