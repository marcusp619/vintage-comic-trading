import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCharacterData, fetchComics } from "../../thunks/fetchComic";
// import Header from "../Header/";
// import Hero from "../../components/Hero";
import styled from "styled-components";
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

// const AppContainer = styled.div`
//   background-color: #ccc7b9;
// `;

// const SectionWrapper = styled.section``;

// const SectionTitle = styled.h2`
//   color: #af7a6d;
//   margin-top: 2em;
//   text-align: center;
// `;
