/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import Context from 'context/Context';
import firebase from 'firebase-db';

const ContextProvider = props => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Context.Provider
      value={{
        ...props,
        currentUser,
        firebase
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
