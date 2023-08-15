import React from "react";
import "./assets/main.css";
import styled from "styled-components";
import HomeView from "./views/HomeView";
import Intro from "./views/Intro";
import Nav from "./views/Nav";
import Main from "./views/Main";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Container className="layout">
      <Nav />
      <HomeView>
        <Routes>
          <Route path="/intro" element={<Intro/>}/>
        </Routes>
      </HomeView>

    </Container>
  )
};

export default App;

const Container = styled.div`
  display: flex;
`