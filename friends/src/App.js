import React, { Component, Fragment } from "react";
import axios from "axios";

import styled from "styled-components";
import { Reset, GlobalStyles } from "./GlobalStyles.js";
import StyleMixins from "./StyleMixins";

import Header from "./components/HeaderComponents/Header.js";
import NewFriendForm from "./components/FriendComponents/NewFriendForm.js";

class App extends Component {
  state = {
    friends: [],
    error: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => 
        this.setState({
          friends: res.data
        })
      ).catch(error => 
        this.setState({
          error
        })
      );
  }

  render() {
    const AppBlock = styled.div`
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
    `;

    const DisplayArea = styled.main`
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
