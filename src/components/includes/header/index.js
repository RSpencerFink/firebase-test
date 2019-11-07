import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Context from 'context/Context';

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: grey;
  section {
    display: flex;
    .spacer {
      margin: 0 8px;
    }
  }
`;

const Header = () => {
  const context = useContext(Context);
  const { currentUser, firebase } = context;
  return (
    <Navigation>
      <NavLink to="/">HOME</NavLink>
      <section>
        {currentUser ? (
          <>
            <div>{currentUser.displayName}</div>
            <div className="spacer">|</div>
            <button onClick={() => firebase.logout()}>LOGOUT</button>
          </>
        ) : (
          <>
            <NavLink to="/login">LOGIN</NavLink>
            <div className="spacer">|</div>
            <NavLink to="/register">REGISTER</NavLink>
          </>
        )}
      </section>
    </Navigation>
  );
};

export default Header;
