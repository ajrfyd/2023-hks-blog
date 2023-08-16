import React, { useEffect, useState } from "react";
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
          <Route path="/" element={<Intro />}/>
        </Routes>
        <HamContainer>
          <span></span>
        </HamContainer>
      </HomeView>

    </Container>
  )
};

export default App;

const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    position: relative;
  }
`;

const HamContainer = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 90vh;
  right: 3rem;
  cursor: pointer;
  display: none;

  span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #000;
    margin-top: 10px;
    position: relative;


    &::before, &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 2px;
      background-color: #000;
      transition: width .3s;
    }

    &::before {
      right: 0px;
      top: 8px;
    }

    &::after {
      left: 0;
      bottom: 8px;
    }
  }

  @media (max-width: 768px) {
    display: block;
  }

  &.active {
    display: block;

    span::before, span::after {
      width: 10px;
    }
  }
`;