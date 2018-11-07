import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Header from "../../containers/Header";
import Hero from "../../components/Hero";
import UserLoggedIn from "../../containers/UserLoggedIn";
import PropTypes from "prop-types";

export const Home = props => {
  console.log(props.user);
  return (
    <AppContainer>
      <Header />
      <Hero />
      <SectionWrapper>
        <SectionTitle>Your Comics</SectionTitle>
        {props.user && <UserLoggedIn />}
      </SectionWrapper>
    </AppContainer>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  comics: state.comics
});

Home.propTypes = {
  comics: PropTypes.array,
  user: PropTypes.object
};

export default connect(mapStateToProps)(Home);

const AppContainer = styled.div`
  background-color: #ccc7b9;
`;

const SectionWrapper = styled.section``;

const SectionTitle = styled.h2`
  color: #af7a6d;
  margin-top: 2em;
  text-align: center;
`;
