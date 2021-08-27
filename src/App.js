import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';

// Import Pages
import AboutUsPage from './pages/AboutUsPage';
import OurWorkPage from './pages/OurWorkPage';
import ContactUsPage from './pages/ContactUsPage';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Switch>
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
        </div>
    );
}

export default App;
