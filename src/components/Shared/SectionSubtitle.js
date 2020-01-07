import styled from "styled-components"
import { mediaQuery } from "../../utils/styles"

const SectionSubtitle = styled.p`
  margin: 1rem 0 0;
  font-size: 1.25rem;

  @media (min-width: ${mediaQuery.m1024}) {
    font-size: 1.25rem;
  }

  @media (min-width: ${mediaQuery.m1440}) {
    font-size: 1.5rem;
  }
`

export default SectionSubtitle
