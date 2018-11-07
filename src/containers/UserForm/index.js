import React, { Component } from "react";
import { connect } from "react-redux";
import { userSignedIn } from "../../actions";
import styled from "styled-components";

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  handleFormChange = event => {
    this.setState({ user: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.getUser(this.state.user);
    this.props.toggleSignInForm();
    this.setState({ user: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <label>
          UserName:
          <Input
            name="user"
            onChange={this.handleFormChange}
            value={this.state.user}
          />
        </label>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => {
  return {
    getUser: user => dispatch(userSignedIn(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);

const Form = styled.form`
  background: rgba(226, 212, 186, 0.8);
  color: #af7a6d;
  display: grid;
  justify-content: center;
  font-size: 1.2em;
  font-weight: bold;
  align-items: center;
  height: 400px;
  position: absolute;
  top: 180%;
  left: 20%;
  width: 50em;
  z-index: 2;
`;

export const Input = styled.input`
  display: block;
  width: 500px;
  height: 2em;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #AF7A6D;
  color: #AF7A6D;
  display: block;
  font-size: 1em;
  margin 0 1em;
  padding: 0.45em 1.25em;
  transition: all .75s ease-out;

  &:hover {
    background: #AF7A6D;
    color: #fff;
  }
`;
