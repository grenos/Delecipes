//* a higher-order component is a function that takes a component and returns a new component.
// https://reactjs.org/docs/higher-order-components.html
//! advantages
//* Reuse code
//* Render highjacking
//* Prop manipulation
//* Abstract state

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//regular component
const Info = props => (
  <div>
    <h1>HOC</h1>
    <p>The info is: {props.info}</p>
  </div>
);

//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// this is a HOC it is called (down) with a component we want to include in it
// to do that we pass the component as an arg and we give it a generic name because -->
// we can use this HOC with other (diferent) components as well

// in this case this HOC is used to add an admin message to any component we put as an argument to its call

// we spread the props {...props} because there might be alot that we have to pass or we migt dont know exactly which ones we will use each time we render the WrappedComponent

//! REDUX <-----
// on redux connect works the same way
// we will be passing our components inside the connect(HOC)
// then we get returned a new component that we're going to be using and this new component will have access to the redux store

const withAdminWarning = WrappedComponent => {
  // the component we return here is actually the HOC
  return props => (
    <div>
      {props.isAdmin && (
        <p>This is private information. Please do not share!</p>
      )}
      <WrappedComponent {...props} />
    </div>
  );
};

// info is passed in as a parameter for the HOC to use
const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="YO MAMA GAY" />,
//   document.getElementById('app')
// );

//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const requireAuth = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuth(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="UR MOM GAY" />,
  document.getElementById('app')
);
