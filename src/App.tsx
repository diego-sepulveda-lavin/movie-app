import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { Home } from './views/Home';
import { MoviePage } from './views/MoviePage';
import { NotFound } from './views/NotFound';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={MoviePage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
