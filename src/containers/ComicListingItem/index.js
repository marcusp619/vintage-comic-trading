import React, { Component } from "react";
import { connect } from "react-redux";
import { addComicToUser } from "../../actions";
import styled from "styled-components";

export class ComicListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayComicData: false
    };
  }

  toggleHoverState = prevState => {
    this.setState({ displayComicData: !this.state.displayComicData });
  };

  addComic = comic => {
    console.log(comic);
    console.log(this.props.user.username);
    console.log(this.props.user.comics);
    this.props.addComicToUser(comic);
  };
  render() {
    return (
      <ComicCard
        onMouseEnter={this.toggleHoverState}
        onMouseLeave={this.toggleHoverState}
        onClick={() => this.addComic(this.props.comic.title)}
      >
        <ComicBookImg
          src={`${this.props.comic.images}`}
          alt="comicbook cover"
        />
        {this.state.displayComicData && (
          <ComicDataContainter>
            <h3>{this.props.comic.title}</h3>
            <h4>Price: {this.props.comic.prices}</h4>
            <p>{this.props.comic.description}</p>
          </ComicDataContainter>
        )}
      </ComicCard>
    );
  }
}

export const mapStateToProps = state => ({
  comics: state.comics,
  user: state.user
});

export const mapDispatchToProps = dispatch => {
  return {
    addComicToUser: comic => dispatch(addComicToUser(comic))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComicListItem);

const ComicCard = styled.div`
  box-shadow: 9px 14px 25px -5px rgba(0, 0, 0, 0.75);
  background: grey;
  height: 300px;
  position: relative;
  transition: all 0.2s ease-in-out;
  width: 250px;

  &:hover {
    transform: scale(1.1);
    z-index: 99;
  }
`;

const ComicBookImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ComicDataContainter = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1em;
  overflow: auto;
  position: absolute;
  height: 100%;
  top: 0px;
`;
