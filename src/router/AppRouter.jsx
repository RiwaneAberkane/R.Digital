import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';

import Home from '../pages/Home';
import ProjectPage from '../pages/ProjectPage';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/projets/:slug"
                    element={<ProjectPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}