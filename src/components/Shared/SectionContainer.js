import React from "react"
import styled from "styled-components"

const Root = styled.div`
  padding: 2rem 0 3rem;
`

const SectionContainer = ({ className, children }) => {
  return <Root className={className}>{children}</Root>
}

export default SectionContainer
