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
    selectedFriend: {},
    error: "",
    temp: ""
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

  generateId() {
    return `${Math.floor(Math.random() * 1000) +
      String(Date.now()) +
      Math.floor(Math.random() * 1000)}`;
  }

  handleChange = e => {
    switch (e.currentTarget.id || e.currentTarget.name) {
      case "friendSelect":
        this.setState({
          selectedFriend:
            this.state.friends.find(
              friend => friend.id === e.currentTarget.value
            ) || ""
        });
        break;
      default:
        this.setState({
          [e.currentTarget.id || e.currentTarget.name]: e.currentTarget.value
        });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    switch (e.currentTarget.id || e.currentTarget.name) {
      case "newFriendForm":
        const postObject = {
          id: this.generateId(),
          firstname: e.currentTarget[0].value,
          lastname: e.currentTarget[1].value,
          age: e.currentTarget[2].value,
          email: e.currentTarget[3].value
        }

        axios
          .post("http://localhost:5000/friends", {...postObject})
          .then(res => {
            this.setState(
              {
                message: res.statusText,
                friends: res.data,
                selectedFriend: {}
              },
              () => console.log(this.state.friends)
            );
          })
          .catch(error =>
            this.setState({
              error
            })
          );
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
                <NewFriendForm
                  handleSubmit={this.handleSubmit}
                />
              )}
            />
            <Route
              path="/friends"
              render={props => (
                <FriendPage
                  friends={this.state.friends}
                  selectedFriend={this.state.selectedFriend}
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
