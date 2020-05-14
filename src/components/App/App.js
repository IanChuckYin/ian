import React, { Component } from 'react';
import styles from './App.module.scss';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { isMobile } from '../../util/MobileUtil';

import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Knights from '../Knights/Knights';
import MarkovProject from '../MarkovProject/MarkovProject';
import Router from '../Router/Router';

/**
 * The root of our App
 */
class App extends Component {
  componentDidMount() {
    const { onAppLoaded, onDeviceDetected } = this.props;
    onAppLoaded();
    onDeviceDetected(isMobile());
  }

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
    const { isLoaded } = this.props;
    if (!isLoaded) {
      return null;
    };

    return (
      <div className={styles.App}>
        <Layout>
          <Router routes={routes} isHash={true} />
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    isMobile: state.isMobile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAppLoaded: () => dispatch({ type: actionTypes.SET_APP_LOADED, isLoaded: true }),
    onDeviceDetected: (isMobile) => dispatch({ type: actionTypes.SET_DEVICE_TYPE, isMobile: isMobile })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
