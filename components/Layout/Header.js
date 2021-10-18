import React from "react";
import styled from "styled-components";
import { MaxWidth } from "../../styles/globalStyle";
import Link from "next/link";

const HeaderContainer = styled.header`
  background-color: #fafafa;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #ebebeb;
`;

const HeaderBox = styled(MaxWidth)`
  display: flex;
  justify-content: space-between;

  a {
    color: black;
  }

  .rightSide {
    span {
      margin-right: 20px;
    }
  }
`;

const Header = ({ user }) => {
  return (
    <HeaderContainer>
      <HeaderBox>
        <Link href="/">
          <a>Video Course</a>
        </Link>
        <div className="rightSide">
          {user ? (
            <>
              <span>Welcome {user.name}!</span>
              <Link href="/api/auth/logout">
                <a>Logout</a>
              </Link>
            </>
          ) : (
            <>
              <Link href="/api/auth/login">
                <a>Login</a>
              </Link>
            </>
          )}
        </div>
      </HeaderBox>
    </HeaderContainer>
  );
  // return (
  //   <HeaderContainer>
  //     <HeaderBox>
  //       <span>Video Course</span>
  //       <div className="rightSide">

  //       </div>
  //     </HeaderBox>
  //   </HeaderContainer>
  // );
};

export default Header;
