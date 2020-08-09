import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const isAuthenticated = localStorage.getItem('token')

export const PrivateRoute = ({ component: Component, props, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        if (props.loading) {
          return <h2>Loading...</h2>;
        } else if (!isAuthenticated) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
  
  const mapStateToProps = (state) => ({
    loading: state.loading,
    error: state.error,
  });
  
export default connect(mapStateToProps)(PrivateRoute);