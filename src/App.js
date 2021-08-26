import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';

// Import Pages
import AboutUsPage from './pages/AboutUsPage';
import OurWorkPage from './pages/OurWorkPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route path="/" exact>
                    <AboutUsPage />
                </Route>
                <Route path="/work">
                    <OurWorkPage />
                </Route>
                <Route path="/contact">
                    <ContactUsPage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
