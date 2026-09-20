import AppRouter from './router/AppRouter';

export default function App() {
    return (
        <>
            <a
                href="#main-content"
                className="skip-link"
            >
                Aller au contenu
            </a>

            <AppRouter />
        </>
    );
}