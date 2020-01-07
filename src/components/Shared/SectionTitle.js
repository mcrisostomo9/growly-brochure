import styled from "styled-components"
import { mediaQuery } from "../../utils/styles"

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0;

  @media (min-width: ${mediaQuery.m1024}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${mediaQuery.m1280}) {
    font-size: 2.75rem;
  }

  @media (min-width: ${mediaQuery.m1440}) {
    font-size: 3.625rem;
  }
`

export default SectionTitle
