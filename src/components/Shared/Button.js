import React, { useContext } from "react"
import styled from "styled-components"
import { mediaQuery } from "../../utils/styles"
import { Context } from "../../context/Context"

const Root = styled.button`
  display: inline-block;
  color: #fff;
  background: var(--pink);
  border: none;
  border-radius: 10px;
  padding: 1rem 1.25rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 400;
  font-size: 0.75rem;

  @media (min-width: ${mediaQuery.m768}) {
    padding: 1.5rem 3rem;
  }
  @media (min-width: ${mediaQuery.m1024}) {
  }
  @media (min-width: ${mediaQuery.m1440}) {
  }
`

const Button = ({ text, className }) => {
  const { toggleModalOpen } = useContext(Context)

  return (
    <Root onClick={toggleModalOpen} className={className}>
      {text}
    </Root>
  )
}

export default Button
