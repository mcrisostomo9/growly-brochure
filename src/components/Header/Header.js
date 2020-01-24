import React, { useContext } from "react"
import styled from "styled-components"
import ContentContainer from "../Shared/ContentContainer"
import logo from "../../images/logo.png"
import Button from "../Shared/Button"
import { mediaQuery } from "../../utils/styles"
import { Context } from "../../context/Context"

const Root = styled(ContentContainer)`
  padding: 1rem;
  color: red;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  align-items: center;
  z-index: 1;

  @media (min-width: ${mediaQuery.m768}) {
    padding: 1rem 3rem;
  }
`

const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 125px;

  @media (min-width: ${mediaQuery.m640}) {
    max-width: 150px;
  }

  @media (min-width: ${mediaQuery.m768}) {
    max-width: 175px;
  }

  @media (min-width: ${mediaQuery.m1024}) {
    max-width: 200px;
  }

  @media (min-width: ${mediaQuery.m1280}) {
    max-width: 250px;
  }
`

const HeaderButton = styled(Button)`
  //font-weight: 700;
  padding: 1rem 0.5rem;

  @media (min-width: ${mediaQuery.m640}) {
    padding: 1rem;
  }
  @media (min-width: ${mediaQuery.m768}) {
    padding: 1rem 1.5rem;
  }
  @media (min-width: ${mediaQuery.m1024}) {
    padding: 1.5rem 3rem;
  }
`

const Header = () => {
  const { toggleModalOpen } = useContext(Context)
  return (
    <Root as="header">
      <Logo src={logo} alt="Growly Logo" />
      <HeaderButton text="Request Beta Access" onClick={toggleModalOpen} />
    </Root>
  )
}

export default Header
