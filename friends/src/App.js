import React, { Component, Fragment } from "react";

import styled from "styled-components";
import { Reset, GlobalStyles } from "./GlobalStyles.js";
import StyleMixins from "./StyleMixins";

import Header from "./components/HeaderComponents/Header.js";

class App extends Component {
  state = {

  };

  render() {
    const AppBlock = styled.div`
      width: 100%;
      margin: 0 auto;
    `;

    const DisplayArea = styled.main`
      ${StyleMixins.makeFlex(null, "space-around", "align-items")}
      
      padding: 0 10px;
      margin: 20px auto;
    `;

    return (
      <Fragment>
        <Reset />
        <GlobalStyles />
        <AppBlock>
          <Header />
          <DisplayArea>

          </DisplayArea>
        </AppBlock>
      </Fragment>
    );
  }
}

export default App;
