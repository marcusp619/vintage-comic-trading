import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchComics} from '../../thunks/fetchComic';
import Header from '../../components/Header/';
import Hero from '../../components/Hero';
import styled from 'styled-components';

export class App extends Component {
  async componentDidMount() {
    try {
      const character = await this.props.fetchComic();
    } catch (error) {
      throw Error(error.message);
    }
  }

  render() {
    return (
      <AppContainer>
        <Header />
        <Hero />
      </AppContainer>
    );
  }
}

export const mapStateToProps = state => ({
  comics: state.comics,
  isLoading: state.loading,
  hasErrored: state.hasErrored,
});

export const mapDispatchToProps = dispatch => {
  return {
    fetchComic: () => dispatch(fetchComics()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

const AppContainer = styled.div`
  background-color: #CCC7B9;
`
const SectionTitle = styled.h2`
  
`
