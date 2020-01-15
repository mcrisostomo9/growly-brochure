import React, { useContext } from "react"
import styled from "styled-components"
import { mediaQuery } from "../../utils/styles"
import { Context } from "../../context/Context"

const Root = styled.button`
  display: inline-block;
  color: #fff;
  background: var(--pink);
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 1rem 1.25rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 400;
  font-size: 0.75rem;

  @media (min-width: ${mediaQuery.m768}) {
    padding: 1rem 1.5rem;
  }

  @media (min-width: ${mediaQuery.m1024}) {
    padding: 1.5rem 3rem;
  }

  @media (min-width: ${mediaQuery.m1440}) {
  }

  :hover {
    color: var(--blue);
    background: #fff;
    border: 1px solid var(--blue);
  }
`

const Button = ({ text, className, onClick }) => {
  const { toggleModalOpen } = useContext(Context)

  return (
    <Root onClick={onClick} className={className}>
      {text}
    </Root>
  )
}

export default Button
