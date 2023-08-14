import React from "react";
import "./assets/main.css";
import styled from "styled-components";
import Nav from "./views/Nav";
import Home from "./views/Home";

const App = () => {
  return (
    <Container className="layout">
      <Nav />
      <Home />
    </Container>
  )
};

export default App;

const Container = styled.div`
  display: flex;
`