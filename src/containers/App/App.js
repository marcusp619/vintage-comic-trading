import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchComics } from "../../thunks/fetchComic";
import Router from "../../utils/Router";
import PropTypes from "prop-types";

export class App extends Component {
  async componentDidMount() {
    try {
      await this.props.fetchComics();
    } catch (error) {
      throw Error(error.message);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}

export const mapStateToProps = state => ({
  comics: state.comics,
  isLoading: state.loading,
  hasErrored: state.hasErrored
});

export const mapDispatchToProps = dispatch => {
  return {
    fetchComics: () => dispatch(fetchComics())
  };
};

App.propTypes = {
  comics: PropTypes.array,
  isLoading: PropTypes.bool,
  hasErrored: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
