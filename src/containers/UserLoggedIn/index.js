import React from "react";
import { connect } from "react-redux";
import ComicListItem from "../ComicListItem";
import styled from "styled-components";
import PropTypes from "prop-types";

export const UserLoggedIn = props => {
  const filteredList = props.user.comics.reduce((acc, userComic) => {
    props.comics.forEach(comic => {
      if (comic.title === userComic) {
        acc.push(comic);
      }
    });
    return acc;
  }, []);

  const cards = filteredList.map((item, index) => (
    <ComicListItem comic={item} key={Date.now() + index} />
  ));

  return (
    <div>
      <h1>Welcome {props.user.name}</h1>
      <ComicContainer>{cards}</ComicContainer>
    </div>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  comics: state.comics
});

UserLoggedIn.propTypes = {
  comics: PropTypes.array,
  user: PropTypes.object
};

export default connect(mapStateToProps)(UserLoggedIn);

const ComicContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 10px 5px;
  margin-top: 2em;
`;
