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
                    aria-label={
                        isOpen
                            ? 'Fermer le menu'
                            : 'Ouvrir le menu'
                    }
                    aria-expanded={isOpen}
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
                                        0
                                        {index +
                                            1}
                                    </span>

                                    {label}
                                </a>
                            ),
                        )}

                        <a
                            href="/#contact"
                            onClick={
                                closeMenu
                            }
                        >
                            <span>
                                05
                            </span>

                            Contact
                        </a>
                    </nav>

                    <div className="header__mobile-bottom">
                        <a
                            href="mailto:r.digitalcorporation@gmail.com"
                        >
                            r.digitalcorporation@gmail.com
                        </a>

                        <span>
                            R DIGITAL · 2026
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}