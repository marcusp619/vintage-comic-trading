import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCharacterData, fetchComics } from "../../thunks/fetchComic";
import Router from "../../utils/Router";
export class App extends Component {
  async componentDidMount() {
    try {
      const character = await this.props.fetchCharacterData();
      // const comics = await this.props.fetchComics(character);
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
    fetchCharacterData: () => dispatch(fetchCharacterData()),
    fetchComics: urls => dispatch(fetchComics(urls))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
