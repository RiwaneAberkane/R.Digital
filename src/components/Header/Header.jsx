import {
    useEffect,
    useState,
} from 'react';

import {
    ArrowUpRight,
    Menu,
    X,
} from 'lucide-react';

import './Header.css';

const navigation = [
    {
        label: 'Projets',
        href: '/#projects',
    },
    {
        label: 'À propos',
        href: '/#about',
    },
    {
        label: 'Processus',
        href: '/#process',
    },
    {
        label: 'Technologies',
        href: '/#stack',
    },
    {
        label: 'Contact',
        href: '/#contact',
    },
];

export default function Header() {
    const [isOpen, setIsOpen] =
        useState(false);

    useEffect(() => {
        document.body.style.overflow =
            isOpen ? 'hidden' : '';

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener(
            'keydown',
            handleEscape,
        );

        return () => {
            document.body.style.overflow = '';

            window.removeEventListener(
                'keydown',
                handleEscape,
            );
        };
    }, [isOpen]);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="header">
            <div className="container header__container">
                <a
                    href="/#hero"
                    className="header__brand"
                    aria-label="R Digital - Accueil"
                    onClick={closeMenu}
                >
                    <span className="header__logo">
                        R
                    </span>

                    <span className="header__brand-text">
                        R DIGITAL
                    </span>
                </a>

                <nav
                    className="header__nav"
                    aria-label="Navigation principale"
                >
                    {navigation.map(
                        ({
                            label,
                            href,
                        }) => (
                            <a
                                key={label}
                                href={href}
                            >
                                {label}
                            </a>
                        ),
                    )}
                </nav>

                <a
                    href="mailto:r.digitalcorporation@gmail.com"
                    className="header__contact"
                >
                    Discutons

                    <ArrowUpRight
                        size={16}
                        strokeWidth={2}
                    />
                </a>

                <button
                    type="button"
                    className="header__menu-button"
                    onClick={() =>
                        setIsOpen(
                            (current) =>
                                !current,
                        )
                    }
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label={
                        isOpen
                            ? 'Fermer le menu'
                            : 'Ouvrir le menu'
                    }
                >
                    {isOpen ? (
                        <X
                            size={22}
                            strokeWidth={2}
                        />
                    ) : (
                        <Menu
                            size={22}
                            strokeWidth={2}
                        />
                    )}
                </button>
            </div>

            <div
                id="mobile-menu"
                className={[
                    'header__mobile',
                    isOpen
                        ? 'header__mobile--open'
                        : '',
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                <div className="container header__mobile-inner">
                    <div>
                        <span className="header__mobile-label">
                            Navigation
                        </span>

                        <nav
                            className="header__mobile-nav"
                            aria-label="Navigation mobile"
                        >
                            {navigation.map(
                                (
                                    {
                                        label,
                                        href,
                                    },
                                    index,
                                ) => (
                                    <a
                                        key={label}
                                        href={href}
                                        onClick={
                                            closeMenu
                                        }
                                    >
                                        <span>
                                            {String(
                                                index +
                                                1,
                                            ).padStart(
                                                2,
                                                '0',
                                            )}
                                        </span>

                                        <strong>
                                            {
                                                label
                                            }
                                        </strong>

                                        <ArrowUpRight
                                            size={
                                                18
                                            }
                                            strokeWidth={
                                                1.8
                                            }
                                        />
                                    </a>
                                ),
                            )}
                        </nav>
                    </div>

                    <div className="header__mobile-bottom">
                        <div className="header__mobile-contact-copy">
                            <span>
                                Une idée en tête ?
                            </span>

                            <strong>
                                Parlons-en.
                            </strong>

                            <p>
                                Un projet, une refonte
                                ou simplement une idée
                                à discuter ?
                            </p>
                        </div>

                        <a
                            href="mailto:r.digitalcorporation@gmail.com"
                            className="header__mobile-contact"
                        >
                            <span>
                                r.digitalcorporation@gmail.com
                            </span>

                            <span className="header__mobile-contact-icon">
                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={2}
                                />
                            </span>
                        </a>

                        <div className="header__mobile-footer">
                            <span>
                                R DIGITAL
                            </span>

                            <span>
                                2026
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}