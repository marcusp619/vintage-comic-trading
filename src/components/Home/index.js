import React from "react";
import styled from "styled-components";
import Header from "../../containers/Header";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <SectionWrapper>
        <SectionTitle>Your Comics</SectionTitle>
      </SectionWrapper>
    </AppContainer>
  );
};

export default Home;

const AppContainer = styled.div`
  background-color: #ccc7b9;
`;

const SectionWrapper = styled.section``;

const SectionTitle = styled.h2`
  color: #af7a6d;
  margin-top: 2em;
  text-align: center;
`;
