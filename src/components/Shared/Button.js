import React from "react"
import styled from "styled-components"

const Root = styled.button`
  color: #fff;
  background: var(--pink);
  border: none;
  border-radius: 10px;
  padding: 1.5rem 3rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 400;
`

const Button = ({ text, onClick, className }) => {
  return (
    <Root onClick={onClick} className={className}>
      {text}
    </Root>
  )
}

export default Button
