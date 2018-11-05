import React from "react";
import { connect } from "react-redux";

const ComicListing = props => {
  const comics = this.props.comics.map(comic => {
    return <ComicListing comic={comic} />;
  });
  return <div>{comics}</div>;
};

export const mapStateToProps = state => ({
  user: state.user,
  comics: state.comics
});

export default connect(mapStateToProps)(ComicListing);
