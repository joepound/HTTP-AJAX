import React from "react";

import styled from "styled-components";
import StyleVars from "../../StyleVars.js";
import StyleMixins from "../../StyleMixins.js";

const FriendInfo = props => {
  const FriendInfoArea = styled.div`
    width: 87.5%;
    margin: 37.5px auto;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 25px;
    }

    div {
      margin: 20px 0 0 10px;

      span {
        font-size: 1.4rem;
      }

      span.friendInfoHeader {
        font-weight: bold;
        margin-right: 10px;
      }
    }
  `;

  return (
    <FriendInfoArea>
      <h2>Your Friend's Information</h2>
      <div>
        <span className="friendInfoHeader">Full name:</span>
        <span>{`${props.selectedFriend.firstname} ${props.selectedFriend.lastname}`}</span>
      </div>
      <div>
        <span className="friendInfoHeader">Age</span>
        <span>{`${props.selectedFriend.age}`}</span>
      </div>
      <div>
        <span className="friendInfoHeader">Email address:</span>
        <span>{`${props.selectedFriend.email}`}</span>
      </div>
    </FriendInfoArea>
  )
};

export default FriendInfo;
