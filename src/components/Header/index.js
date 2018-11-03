import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <SignInContainer>
        <Button>Sign In</Button>
      </SignInContainer>
      <nav>
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Browse</Button>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

const SignInContainer = styled.div``;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #AF7A6D;
  color: #AF7A6D;
  font-size: 1em;
  margin 0 1em;
  padding: 0.45em 1.25em;
  transition: all .75s ease-out;

  &:hover {
    background: #AF7A6D;
    color: #fff;
  }
`;

const HeaderContainer = styled.header`
  background: #e2d4ba;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.8);
  display: flex;
  justify-content: space-between;
  padding: 1em 0.5em;
  margin: 0 auto;
`;
