import React, { Component, Fragment } from "react";

import styled from "styled-components";
import { Reset, GlobalStyles } from "./GlobalStyles.js";

import Header from "./components/HeaderComponents/Header.js";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const AppBlock = styled.div`
      width: 100%;
      margin: 0 auto;
    `;

    return (
      <Fragment>
        <Reset />
        <GlobalStyles />
        <AppBlock>
          <Header />
        </AppBlock>
      </Fragment>
    );
  }
}

export default App;
