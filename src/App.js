import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import Pages
import AboutUsPage from './pages/AboutUsPage';
import OurWorkPage from './pages/OurWorkPage';
import ContactUsPage from './pages/ContactUsPage';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
    const location = useLocation();

    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                    <Route path="/" exact>
                        <AboutUsPage />
                    </Route>

                    <Route path="/work" exact>
                        <OurWorkPage />
                    </Route>

                    <Route path="/work/:id">
                        <MovieDetailPage />
                    </Route>

                    <Route path="/contact" exact>
                        <ContactUsPage />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
