import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserForm from "../UserForm";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  toggleSignInForm = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    const isLoggedIn = this.props.user;
    return (
      <HeaderContainer>
        <SignInContainer>
          <Button onClick={this.toggleSignInForm}>
            {isLoggedIn ? this.props.user.name : "Sign In"}
          </Button>
        </SignInContainer>
        <nav>
          <Button>
            <StyledLink to="/">Home</StyledLink>
          </Button>
          <Button>
            <StyledLink to="/About">About</StyledLink>
          </Button>
          <Button>
            <StyledLink to="/Browse">Browse</StyledLink>
          </Button>
        </nav>
        {this.state.isVisible && (
          <UserForm toggleSignInForm={this.toggleSignInForm} />
        )}
      </HeaderContainer>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);

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

const StyledLink = styled(Link)`
  color: #af7a6d;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

const HeaderContainer = styled.header`
  background: #e2d4ba;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.8);
  display: flex;
  justify-content: space-between;
  padding: 1em 0.5em;
  position: relative;
  margin: 0 auto;
  z-index: 1;
`;

const SignInContainer = styled.div``;
