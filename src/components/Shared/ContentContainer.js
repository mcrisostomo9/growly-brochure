import styled from "styled-components"
import { mediaQuery } from "../../utils/styles"

const ContentContainer = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${mediaQuery.m768}) {
    padding: 1rem 3rem;
  }

  @media (min-width: ${mediaQuery.m1280}) {
    max-width: 1200px;
  }

  @media (min-width: ${mediaQuery.m1680}) {
    max-width: 1680px;
  }
`

export default ContentContainer
