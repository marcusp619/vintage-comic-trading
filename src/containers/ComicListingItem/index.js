import React from "react";
// import { connect } from "react-redux";
import styled from "styled-components";

const ComicListItem = props => {
  console.log(props);
  return (
    <ComicCard>
      <ComicBookImg src={`${props.comic.images}`} alt="comicbook cover" />
    </ComicCard>
  );
};

export default ComicListItem;

const ComicCard = styled.div`
  background: grey;
  height: 300px;
  width: 250px;
  box-shadow: 9px 14px 25px -5px rgba(0, 0, 0, 0.75);
`;

const ComicBookImg = styled.img`
  width: 100%;
  height: 100%;
`;
