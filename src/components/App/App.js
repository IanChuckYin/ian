import React, { Component } from 'react';
import styles from './App.module.scss';

import Home from '../Home/Home';
import Knights from '../Knights/Knights';
import MarkovProject from '../MarkovProject/MarkovProject';
import Router from '../Router/Router';

/**
 * The root of our App
 */
class App extends Component {
  state = {
    routes: [
      {
        component: Knights,
        path: '/knights'
      },
      {
        component: MarkovProject,
        path: '/tweet_generator'
      },
      {
        component: Home,
        path: '/'
      }
    ]
  }

  render() {
    const { routes } = this.state;

    return (
      <div className={styles.App}>
        <Router routes={routes} isHash={true} />
      </div>
    );
  }
}

export default App;
