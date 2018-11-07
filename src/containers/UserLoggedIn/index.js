import React from "react";
import { connect } from "react-redux";

export const UserLoggedIn = () => {
  return <h1>UserLoggedIn</h1>;
};

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(UserLoggedIn);
