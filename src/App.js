import React, {Component} from 'react';

import { Router } from 'react-router-dom';

import { connect } from 'react-redux';
import createBrowserHistory from './history'
import Routes from './routes';
import * as actions from './store/actions/auth';



class App extends Component {
  

  componentDidMount() {
    this.props.onTryAutoSignup();
  };

  render() {
  return (
      <div className="App">
        <Router history={createBrowserHistory}>
          <Routes />
        </Router>
      </div>
  );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
