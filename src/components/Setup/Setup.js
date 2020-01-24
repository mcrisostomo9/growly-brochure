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
  color: #7c8087;

  @media (min-width: ${mediaQuery.m768}) {
    margin-top: 3rem;
    max-width: 800px;
  }
`

const Setup = () => {
  return (
    <StyledSectionContainer>
      <ContentContainer>
        <StyledSectionTitle>Set-up in Minutes</StyledSectionTitle>
        <StyledSectionSubtitle>No Coding Required</StyledSectionSubtitle>
        <SectionContent>
          We’re an easy to use referral program that integrates with your email
          marketing tool. With just a little input from you, we’ll help
          incentivize your audience to share your newsletter with their friends.
        </SectionContent>
      </ContentContainer>
    </StyledSectionContainer>
  )
}

export default Setup
