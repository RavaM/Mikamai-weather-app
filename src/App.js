import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/header';
import * as ROUTES from "./constants/routes";
import { Home, SearchHistory, SearchResults } from './pages';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Router>
      <Header />
      <Route exact path={ROUTES.HOME}>
        <Home setModalOpen={setModalOpen} modalOpen={modalOpen} />
      </Route>
      <Route exact path={ROUTES.SEARCH_HISTORY}>
        <SearchHistory setModalOpen={setModalOpen} modalOpen={modalOpen} />
      </Route>
      <Route exact path={ROUTES.SEARCH_RESULTS}>
        <SearchResults setModalOpen={setModalOpen} modalOpen={modalOpen} />
      </Route>

    </Router>
  );
}

export default App;
