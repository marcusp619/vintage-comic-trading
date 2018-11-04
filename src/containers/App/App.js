import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchComics} from '../../thunks/fetchComic';
import Header from '../Header/';
import Hero from '../../components/Hero';
import styled from 'styled-components';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasOverlay: false
    }
  }
  async componentDidMount() {
    try {
      const character = await this.props.fetchComic();
    } catch (error) {
      throw Error(error.message);
    }
  }

  toggleOverlay = () => {
    this.setState({hasOverlay: !this.state.hasOverlay})
  }

  render() {
    return (
      <AppContainer>
        <Header toggleOverlay={this.toggleOverlay}/>
        <Hero />
        <SectionWrapper>
          <SectionTitle>Your Comics</SectionTitle>
        </SectionWrapper>
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

const SectionWrapper = styled.section`
  
`

const SectionTitle = styled.h2`
  color: #AF7A6D; 
  margin-top: 2em;
  text-align: center;

`
