import {
    useEffect,
    useLayoutEffect,
    useRef,
} from 'react';

import {
    Link,
    useParams,
} from 'react-router-dom';

import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    ExternalLink,
} from 'lucide-react';

import { Helmet } from 'react-helmet-async';

import Header from '../components/Header/Header';

import {
    getProjectBySlug,
} from '../data/projects';

import { gsap } from '../utils/gsap';

import './ProjectPage.css';

export default function ProjectPage() {
    const { slug } = useParams();

    const project =
        getProjectBySlug(slug);

    const pageRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useLayoutEffect(() => {
        if (!project) {
            return undefined;
        }

        const ctx = gsap.context(() => {
            const mm =
                gsap.matchMedia();

            mm.add(
                {
                    reduceMotion:
                        '(prefers-reduced-motion: reduce)',
                },
                (context) => {
                    const {
                        reduceMotion,
                    } =
                        context.conditions;

                    if (reduceMotion) {
                        gsap.set(
                            [
                                '.project-detail__eyebrow',
                                '.project-detail__title',
                                '.project-detail__lead',
                                '.project-detail__hero-actions',
                                '.project-detail__hero-visual',
                                '.project-detail__reveal',
                            ],
                            {
                                opacity: 1,
                                clearProps:
                                    'all',
                            },
                        );

                        return;
                    }

                    const timeline =
                        gsap.timeline({
                            defaults: {
                                ease:
                                    'power3.out',
                            },
                        });

                    timeline
                        .from(
                            '.project-detail__eyebrow',
                            {
                                y: 18,
                                opacity: 0,
                                duration:
                                    0.6,
                            },
                        )

                        .from(
                            '.project-detail__title',
                            {
                                y: 55,
                                opacity: 0,
                                duration:
                                    0.9,
                            },
                            '-=0.25',
                        )

                        .from(
                            '.project-detail__lead',
                            {
                                y: 30,
                                opacity: 0,
                                duration:
                                    0.7,
                            },
                            '-=0.45',
                        )

                        .from(
                            '.project-detail__hero-actions',
                            {
                                y: 20,
                                opacity: 0,
                                duration:
                                    0.6,
                            },
                            '-=0.4',
                        )

                        .from(
                            '.project-detail__hero-visual',
                            {
                                y: 60,
                                scale: 0.96,
                                opacity: 0,
                                duration:
                                    1.1,
                            },
                            '-=0.6',
                        );

                    const reveals =
                        gsap.utils.toArray(
                            '.project-detail__reveal',
                        );

                    reveals.forEach(
                        (element) => {
                            gsap.from(
                                element,
                                {
                                    y: 50,
                                    opacity:
                                        0,

                                    duration:
                                        0.85,

                                    ease:
                                        'power3.out',

                                    scrollTrigger:
                                    {
                                        trigger:
                                            element,

                                        start:
                                            'top 86%',
                                    },
                                },
                            );
                        },
                    );
                },
            );

            return () =>
                mm.revert();
        }, pageRef);

        return () =>
            ctx.revert();
    }, [project]);

    if (!project) {
        return (
            <div className="project-not-found">
                <div>
                    <h1>
                        Projet introuvable.
                    </h1>

                    <Link to="/">
                        Retour à l’accueil
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>
                    {project.name} —
                    R Digital
                </title>

                <meta
                    name="description"
                    content={
                        project.shortDescription
                    }
                />
            </Helmet>

            <Header />

            <main
                ref={pageRef}
                className={[
                    'project-detail',
                    `project-detail--${project.theme}`,
                ].join(' ')}
            >
                <section className="project-detail__hero">
                    <div className="project-detail__hero-background" />

                    <div className="container">
                        <div className="project-detail__hero-top">
                            <Link
                                to="/#projects"
                                className="project-detail__back"
                            >
                                <ArrowLeft
                                    size={17}
                                    strokeWidth={2}
                                />

                                Retour aux projets
                            </Link>

                            <span className="project-detail__counter">
                                {
                                    project.number
                                }{' '}
                                / 03
                            </span>
                        </div>

                        <div className="project-detail__hero-copy">
                            <span className="project-detail__eyebrow">
                                {
                                    project.category
                                }
                            </span>

                            <h1 className="project-detail__title">
                                {
                                    project.name
                                }
                            </h1>

                            <p className="project-detail__lead">
                                {
                                    project.shortDescription
                                }
                            </p>

                            <div className="project-detail__hero-actions">
                                {project.liveUrl && (
                                    <a
                                        href={
                                            project.liveUrl
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-detail__primary-button"
                                    >
                                        Voir
                                        le
                                        site

                                        <ExternalLink
                                            size={
                                                17
                                            }
                                            strokeWidth={
                                                2
                                            }
                                        />
                                    </a>
                                )}

                                <a
                                    href="#project-content"
                                    className="project-detail__secondary-button"
                                >
                                    Découvrir
                                    le
                                    projet

                                    <ArrowRight
                                        size={
                                            17
                                        }
                                        strokeWidth={
                                            2
                                        }
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="project-detail__hero-visual">
                            <div className="project-detail__browser">
                                <div className="project-detail__browser-top">
                                    <div className="project-detail__browser-controls">
                                        <span />
                                        <span />
                                        <span />
                                    </div>

                                    <span className="project-detail__browser-address">
                                        {
                                            project.slug
                                        }
                                    </span>

                                    <span className="project-detail__browser-brand">
                                        R DIGITAL
                                    </span>
                                </div>

                                <div className="project-detail__browser-screen">
                                    <img
                                        className="project-detail__hero-image"
                                        src={
                                            project.mainImage
                                        }
                                        alt={
                                            project.imageAlt
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="project-content"
                    className="project-detail__overview"
                >
                    <div className="container">
                        <div className="project-detail__overview-grid project-detail__reveal">
                            <div>
                                <span className="project-detail__section-number">
                                    01
                                </span>

                                <span className="project-detail__section-label">
                                    Le projet
                                </span>

                                <h2>
                                    Une
                                    expérience
                                    pensée
                                    pour son
                                    univers.
                                </h2>
                            </div>

                            <div className="project-detail__overview-copy">
                                <p>
                                    {
                                        project.description
                                    }
                                </p>

                                <p>
                                    {
                                        project.context
                                    }
                                </p>
                            </div>
                        </div>

                        <div className="project-detail__role project-detail__reveal">
                            <span>
                                Mon rôle
                            </span>

                            <p>
                                {
                                    project.role
                                }
                            </p>
                        </div>
                    </div>
                </section>

                <section className="project-detail__features">
                    <div className="container">
                        <div className="project-detail__section-header project-detail__reveal">
                            <div>
                                <span className="project-detail__section-number">
                                    02
                                </span>

                                <span className="project-detail__section-label">
                                    Points clés
                                </span>
                            </div>

                            <h2>
                                Ce qui
                                structure
                                l’expérience.
                            </h2>
                        </div>

                        <div className="project-detail__features-grid">
                            {project.features.map(
                                (
                                    feature,
                                ) => (
                                    <article
                                        key={
                                            feature.number
                                        }
                                        className="project-detail__feature project-detail__reveal"
                                    >
                                        <span>
                                            {
                                                feature.number
                                            }
                                        </span>

                                        <h3>
                                            {
                                                feature.title
                                            }
                                        </h3>

                                        <p>
                                            {
                                                feature.text
                                            }
                                        </p>
                                    </article>
                                ),
                            )}
                        </div>
                    </div>
                </section>

                <section className="project-detail__gallery">
                    <div className="container">
                        <div className="project-detail__section-header project-detail__reveal">
                            <div>
                                <span className="project-detail__section-number">
                                    03
                                </span>

                                <span className="project-detail__section-label">
                                    Interface
                                </span>
                            </div>

                            <h2>
                                Le projet
                                en images.
                            </h2>
                        </div>

                        <div className="project-detail__gallery-list">
                            {project.gallery.map(
                                (
                                    item,
                                    index,
                                ) => (
                                    <figure
                                        key={
                                            item.label
                                        }
                                        className={[
                                            'project-detail__gallery-item',

                                            index %
                                                2 !==
                                                0
                                                ? 'project-detail__gallery-item--offset'
                                                : '',

                                            'project-detail__reveal',
                                        ]
                                            .filter(
                                                Boolean,
                                            )
                                            .join(
                                                ' ',
                                            )}
                                    >
                                        <div className="project-detail__gallery-image">
                                            <img
                                                src={
                                                    item.image
                                                }
                                                alt={
                                                    item.alt
                                                }
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>

                                        <figcaption>
                                            <span>
                                                {
                                                    item.label
                                                }
                                            </span>

                                            <h3>
                                                {
                                                    item.title
                                                }
                                            </h3>
                                        </figcaption>
                                    </figure>
                                ),
                            )}
                        </div>
                    </div>
                </section>

                <section className="project-detail__stack">
                    <div className="container">
                        <div className="project-detail__stack-wrapper project-detail__reveal">
                            <div>
                                <span className="project-detail__section-number">
                                    04
                                </span>

                                <span className="project-detail__section-label">
                                    Technologies
                                </span>

                                <h2>
                                    Stack
                                    technique.
                                </h2>
                            </div>

                            <div className="project-detail__stack-list">
                                {project.stack.map(
                                    (
                                        technology,
                                    ) => (
                                        <span
                                            key={
                                                technology
                                            }
                                        >
                                            {
                                                technology
                                            }
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="project-detail__cta">
                    <div className="container">
                        <div className="project-detail__cta-box project-detail__reveal">
                            <span>
                                Un projet en
                                tête ?
                            </span>

                            <h2>
                                Créons quelque
                                chose qui vous
                                ressemble.
                            </h2>

                            <p>
                                Une idée, un site
                                ou une application
                                ? Parlons-en
                                simplement.
                            </p>

                            <a
                                href="mailto:r.digitalcorporation@gmail.com"
                                className="project-detail__cta-link"
                            >
                                Parlons de
                                votre projet

                                <ArrowUpRight
                                    size={19}
                                    strokeWidth={2}
                                />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}