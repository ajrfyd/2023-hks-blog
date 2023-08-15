import React from "react";
import styled from "styled-components";
import Title from "../components/Title";

type HomeViewProps = {
  children: React.ReactNode;
}

const Home = ({ children }: HomeViewProps) => {
  return (
    <HomeContainer className="standard-dialog">
      <Title title="Welcome to HK's Blog" size={3} />
      { children }
    </HomeContainer>
  )
}

export default Home;

const HomeContainer = styled.div`
  flex: 8;
  height: 100vh;
  margin: .9rem .5rem;
`