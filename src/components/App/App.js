import React, { Component } from 'react';
import styles from './App.module.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

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
    console.log(process.env.PUBLIC_URL);
    const renderedRoutes = (
      <Switch>
        {routes.map((route, index) => <Route key={index} path={process.env.PUBLIC_URL + route.path} component={route.component} />)}
        <Redirect to='/' />
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
