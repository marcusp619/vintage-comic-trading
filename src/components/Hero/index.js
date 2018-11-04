import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return <HeroSection />;
};

export default Hero;

const HeroSection = styled.section`
  background: url('https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4ed09f54e45802124a212b6163dec174&auto=format&fit=crop&w=3300&q=80')
    no-repeat center center fixed;
  background-size: cover;
  height: 300px;
`;
