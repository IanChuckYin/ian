import React, { Component } from 'react';
import styles from './App.module.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import path from '../../path';

import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Knights from '../Knights/Knights';
import MarkovProject from '../MarkovProject/MarkovProject';

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
    console.log(path, process.env);
    const renderedRoutes = (
      <Switch>
        {routes.map((route, index) => <Route key={index} path={path + route.path} component={route.component} />)}
        <Redirect to={path} />
      </Switch>
    );

    return (
      <div className={styles.App}>
        <Layout>
          {renderedRoutes}
        </Layout>
      </div>
    );
  }
}

export default App;
