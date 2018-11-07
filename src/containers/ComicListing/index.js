import React from "react";
import { connect } from "react-redux";
import ComicListingItem from "../ComicListItem";
import styled from "styled-components";
import { Header } from "../Header";

export const ComicListing = props => {
  const ComicItems = props.comics.map((comic, index) => {
    return <ComicListingItem comic={comic} key={Date.now() + index} />;
  });

  return (
    <Wrapper>
      <Header />
      <ComicContainer>{ComicItems}</ComicContainer>
    </Wrapper>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  comics: state.comics
});

export default connect(mapStateToProps)(ComicListing);

const Wrapper = styled.div``;

const ComicContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 10px 5px;
  margin-top: 2em;
`;
