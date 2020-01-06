import React from "react"
import styled from "styled-components"
import Container from "../Shared/Container"
import logo from "../../images/header-logo.png"
import Button from "../Shared/Button"

const Root = styled(Container)`
  color: red;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
`

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
`

const Anchor = styled.a`
  color: var(--dark-grey);
  text-decoration: none;
  margin-right: 2rem;
`

const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 250px;
`

const HeaderButton = styled(Button)`
  font-weight: 700;
`

const Header = () => (
  <Root as="header">
    <Logo src={logo} alt="Growly Logo" />
    <ActionContainer>
      <Anchor href="">How It Works</Anchor>
      <HeaderButton text="Request Beta Access" />
    </ActionContainer>
  </Root>
)

export default Header
