import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { MoviePage } from './views/MoviePage';
import { NotFound } from './views/NotFound';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={MoviePage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
