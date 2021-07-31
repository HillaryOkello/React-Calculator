import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Quote from './components/Quote';
import App from './components/App';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={App} />
      <Route path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
