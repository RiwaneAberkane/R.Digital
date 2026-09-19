import { Link, useParams } from 'react-router-dom';

const projects = {
    xenom: 'XENOM',
    'halal-food-caen': 'Halal Food Caen',
    'cristoune-creation': 'CrisToune Création',
};

export default function ProjectPage() {
    const { slug } = useParams();

    const projectName = projects[slug];

    if (!projectName) {
        return (
            <main>
                <h1>Projet introuvable.</h1>

                <Link to="/">
                    Retour à l'accueil
                </Link>
            </main>
        );
    }

    return (
        <main>
            <Link to="/">
                ← Retour
            </Link>

            <h1>{projectName}</h1>

            <p>
                La page projet sera construite prochainement.
            </p>
        </main>
    );
}