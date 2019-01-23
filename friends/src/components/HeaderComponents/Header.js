import React from "react";

import styled from "styled-components";
import StyleVars from "../../StyleVars.js";

const Header = props => {
  const Wrapper = styled.header`
    background-color: ${StyleVars.Colors.Header.bgColor};
    padding: 20px 0;
  `;

  const AppName = styled.h1`
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    color: ${StyleVars.Colors.Header.fontColor};
  `;

  return (
    <Wrapper>
      <AppName>Friends</AppName>
    </Wrapper>
  );
};

export default Header;
