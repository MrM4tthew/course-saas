import React from "react";
import styled from "styled-components";
import { MaxWidth } from "../../styles/globalStyle";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterBox = styled(MaxWidth)`
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <span>This is footer</span>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
