import React from "react";
import { connect } from "react-redux";
import ComicListingItem from "../ComicListingItem";
import styled from "styled-components";
import { Header } from "../Header";

export const ComicListing = props => {
  console.log(props.comics);
  const ComicItems = props.comics.map((comic, index) => {
    return <ComicListingItem comic={comic} />;
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
