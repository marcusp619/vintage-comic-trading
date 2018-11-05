import React from "react";
import { connect } from "react-redux";

const ComicListItem = props => {
  return <div>card</div>;
};

export const mapStateToProps = state => ({
  user: state.user,
  comics: state.comics
});

export default connect(mapStateToProps)(ComicListItem);
