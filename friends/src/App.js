import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";
import { Reset, GlobalStyles } from "./GlobalStyles.js";
import StyleVars from "./StyleVars.js";

import Header from "./components/HeaderComponents/Header.js";
import NewFriendForm from "./components/FriendComponents/NewFriendForm.js";
import FriendPage from "./components/FriendComponents/FriendPage.js";

class App extends Component {
  state = {
    friends: [],
    newFirstName: "",
    newLastName: "",
    newEmail: "",
    newAge: "",
    selectedFriend: {},
    selectedFriendId: "",
    error: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res =>
        this.setState(
          {
            friends: res.data
          },
          () => console.log(this.state.friends)
        )
      )
      .catch(error =>
        this.setState({
          error
        })
      );
  }

  handleChange = e => {
    switch (e.currentTarget.id || e.currentTarget.name) {
      case "friendSelect":
        const selectedFriend = this.state.friends[e.currentTarget.value];
        this.setState({
          selectedFriend,
          selectedFriendId: selectedFriend.id
        });
        break;
    }
  };

  handleClick = e => {};

  render() {
    const AppBlock = styled.div`
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
    `;

    const DisplayArea = styled.main`
      background-color: ${StyleVars.Colors.DisplayArea.bgColor};
      padding: 25px;
      margin: 20px auto;
    `;

    return (
      <Fragment>
        <Reset />
        <GlobalStyles />
        <AppBlock>
          <Header />
          <DisplayArea>
            <Route
              path="/add"
              render={props => (
                <NewFriendForm {...props} handleClick={this.handleClick} />
              )}
            />
            <Route
              path="/friends"
              render={props => (
                <FriendPage
                  {...props}
                  friends={this.state.friends}
                  selectedFriend={this.state.selectedFriend}
                  selectedFriendId={this.state.selectedFriendId}
                  handleChange={this.handleChange}
                />
              )}
            />
          </DisplayArea>
        </AppBlock>
      </Fragment>
    );
  }
}

export default App;
