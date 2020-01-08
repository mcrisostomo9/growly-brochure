import React from "react"
import styled from "styled-components"
import ContentContainer from "../Shared/ContentContainer"
import logo from "../../images/header-logo.png"
import Button from "../Shared/Button"
import { mediaQuery } from "../../utils/styles"

const Root = styled(ContentContainer)`
  color: red;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  align-items: center;
  //z-index: 1;
`

const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 150px;

  @media (min-width: ${mediaQuery.m768}) {
    max-width: 250px;
  }
`

const HeaderButton = styled(Button)`
  //font-weight: 700;
`

const Header = () => (
  <Root as="header">
    <Logo src={logo} alt="Growly Logo" />
    <HeaderButton text="Request Beta Access" />
  </Root>
)

export default Header
