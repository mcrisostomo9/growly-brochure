import styled from "styled-components"
import { mediaQuery } from "../../utils/styles"

const ContentContainer = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;

  @media (min-width: ${mediaQuery.m768}) {
    padding: 1rem 3rem;
  }
`

export default ContentContainer
