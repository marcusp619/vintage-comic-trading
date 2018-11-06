import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchComics } from "../../thunks/fetchComic";
import Router from "../../utils/Router";
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
