import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {fetchCharacter} from '../../utils/API';
//import {comicFetchDataSuccess} from '../../actions';
import {fetchComics} from '../../thunks/fetchComic' 
import './App.css';

export class App extends Component {
 async componentDidMount() {
    const character = await this.props.fetchComic();
    console.log(character)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Learn React</header>
      </div>
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
    fetchComic: () => dispatch(fetchComics())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
