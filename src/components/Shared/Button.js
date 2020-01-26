import React, { useContext } from "react"
import styled from "styled-components"
import { mediaQuery } from "../../utils/styles"
import { Context } from "../../context/Context"

const Root = styled.button`
  display: inline-block;
  font-family: "Avenir", sans-serif;
  font-weight: 700;
  color: #fff;
  background: var(--pink);
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 1rem 1.25rem;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 0.75rem;
  letter-spacing: 2px;

  @media (min-width: ${mediaQuery.m768}) {
    padding: 1rem 1.5rem;
  }

  @media (min-width: ${mediaQuery.m1024}) {
    padding: 1.5rem 3rem;
  }

  transition: color 500ms, border-color 500ms, background 500ms;

  :hover {
    color: var(--blue);
    border: 1px solid var(--blue);
    outline: none;
    background: #fff;
  }

  :focus,
  :active {
    outline: none;
    border: 1px solid var(--blue);
  }
`

const Button = ({ text, className, onClick, type }) => {
  return (
    <Root onClick={onClick} className={className} type={type}>
      {text}
    </Root>
  )
}

export default Button
