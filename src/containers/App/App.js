import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchComic} from '../../utils/API';
import {comicFetchDataSuccess} from '../../actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetchComic();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Learn React</header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {comic: state.comicsReducer};
};

const mapDispatchToProps = dispatch => {
  return {
    addComic: comic => {
      dispatch(comicFetchDataSuccess(comic));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
