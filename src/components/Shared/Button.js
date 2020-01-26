import React from "react"
import styled from "styled-components"
import { mediaQuery } from "../../utils/styles"

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

  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 0.3s;

  :before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    transform: scaleX(0);
    border-radius: 10px;
    transform-origin: 0 50%;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  :hover:before {
    transform: scaleX(1);
  }

  :hover {
    color: var(--blue);
    border: 1px solid var(--blue);
    outline: none;
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
