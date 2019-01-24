import React, { Fragment } from "react";

import styled from "styled-components";
import StyleVars from "../../StyleVars.js";
import StyleMixins from "../../StyleMixins.js";

import FriendInfo from "./FriendInfo.js";

const FriendPage = props => {
  const Header = styled.h2`
    text-align: center;
    font-size: 2.25rem;
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 50px;
  `;

  const FriendSelect = styled.div`
    label {
      font-size: 1.6rem;
    }
    select {
      display: block;
      width: 100%;
      padding: 10px;
      margin: 15px auto;

      option {
        padding: 10px;
      }
    }
  `;

  return (
    <Fragment>
      <Header>Your Friends</Header>
      <FriendSelect>
        {props.friends.length ? (
          <Fragment>
            <label htmlFor="friendSelect">Select a friend:</label>
            <select id="friendSelect" onChange={props.handleChange} value={props.selectedFriendId}>
              <option defaultValue hidden>
                Select a friend:
              </option>
              {props.friends.map(friend => (
                <option key={friend.id} value={friend.id}>
                  {friend.firstname} {friend.lastname}
                </option>
              ))}
            </select>
          </Fragment>
        ) : (
          <label htmlFor="friendSelect">
            You currently do not have any friends listed.
          </label>
        )}
      </FriendSelect>
      {props.selectedFriend.id && (
        <FriendInfo selectedFriend={props.selectedFriend} />
      )}
    </Fragment>
  );
};

export default FriendPage;
