import * as React from 'react';
import * as Loadable from 'react-loadable';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import './App.css';
// import About from './components/about';
// import Home from './components/home';
import Loading from './components/loading';

const Home = Loadable({
  loader: () => import('./routes/home/home.container'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./routes/about/about.container'),
  loading: Loading,
});


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <hr />

            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
