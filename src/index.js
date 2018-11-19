import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Location } from '@reach/router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';

import AppStore from './stores/appStore';
const appStore = new AppStore();

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return null;
  }
}

const App = () => {
  return (
    <>
      <Header />
      <main className="container pt-4 pb-4">
        <Router>
          <Home path="/" store={appStore} />
          <About path="about" />
        </Router>
      </main>
      <Footer />
      <Location>{props => <ScrollToTop location={props.location} />}</Location>
    </>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
