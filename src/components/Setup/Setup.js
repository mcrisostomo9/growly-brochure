import React from "react"
import styled from "styled-components"
import SectionContainer from "../Shared/SectionContainer"
import SectionTitle from "../Shared/SectionTitle"
import ContentContainer from "../Shared/ContentContainer"
import SectionSubtitle from "../Shared/SectionSubtitle"
import { mediaQuery } from "../../utils/styles"

const StyledSectionContainer = styled(SectionContainer)`
  background: #fff;
  text-align: center;
`

const StyledSectionTitle = styled(SectionTitle)`
  color: var(--dark-grey);
`

const StyledSectionSubtitle = styled(SectionSubtitle)`
  color: var(--content-grey);
`

const SectionContent = styled(SectionSubtitle)`
  margin: 2rem auto 0;
  line-height: 1.75;
  max-width: 1000px;
  color: var(--content-grey);

  @media (min-width: ${mediaQuery.m768}) {
    margin-top: 3rem;
  }
`

const Setup = () => {
  return (
    <StyledSectionContainer>
      <ContentContainer>
        <StyledSectionTitle>Activated Set-up in Minutes</StyledSectionTitle>
        <StyledSectionSubtitle>
          Humans influencing other humans
        </StyledSectionSubtitle>
        <SectionContent>
          We’re an easy-to-use system that integrates into your email stack to
          influence your subscribers to refer their social circles. Zero coding
          required. In minutes, your company will build a reward program for
          your audience & send custom, personalized data inside your emails.
          Growly is completely behind the scenes, but impacts 69% of your
          subscribers.
        </SectionContent>
      </ContentContainer>
    </StyledSectionContainer>
  )
}

export default Setup
