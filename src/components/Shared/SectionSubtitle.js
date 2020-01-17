import styled from "styled-components"
import { mediaQuery } from "../../utils/styles"

const SectionSubtitle = styled.p`
  margin: 1rem 0 0;
  font-size: 1.25rem;
  font-family: "Avenir", sans-serif;

  @media (min-width: ${mediaQuery.m1440}) {
    font-size: 1.5rem;
  }
  
  // @media (min-width: ${mediaQuery.m1680}) {
  //   font-size: 1.5rem;
  // }
`

export default SectionSubtitle
