import React from "react"
import styled from "styled-components"
import ContentContainer from "../Shared/ContentContainer"
import { mediaQuery } from "../../utils/styles"
import Img from "gatsby-image"
import SectionTitle from "../Shared/SectionTitle"
import SectionSubtitle from "../Shared/SectionSubtitle"
import icon from "../../images/steps-icon.png"
import Button from "../Shared/Button"

const StepsSection = styled(ContentContainer)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  @media (min-width: ${mediaQuery.m768}) {
    grid-template-columns: 1fr 1fr;
  }
`

const TextContainer = styled.div`
  align-self: start;
`

const StyledLogo = styled(Img)`
  display: none;

  @media (min-width: ${mediaQuery.m768}) {
    display: initial;
  }
`

const StyledSectionTitle = styled(SectionTitle)`
  span {
    display: block;
  }
`

const StyledSectionSubtitle = styled(SectionSubtitle)``

const StepsList = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 2rem;
`

const StepContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 1rem;
`

const Icon = styled.img`
  grid-row: 1/3;
  grid-column: 1/2;
  align-self: center;
`

const StepTitle = styled.div`
  font-family: "Montserrat", serif;
  font-weight: 700;
  font-size: 1.875rem;
  align-self: end;
`
const StepBody = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 1.125rem;
  font-weight: 300;
  align-self: start;
`

const StyledButton = styled(Button)`
  background: #fff;
  color: var(--blue);
  font-weight: 700;
  margin-top: 3rem;
`

const StepsArray = [
  {
    icon: icon,
    title: "Accelerate subscribers",
    body:
      "When referrals tools are used, newsletters are 3x likely to speed their subscriber list.",
  },
  {
    icon: icon,
    title: "Award rewards",
    body:
      "50% of people are likely to provide a referral when incentive or recognition is offered.",
  },
  {
    icon: icon,
    title: "Their people are your people",
    body:
      "50% of consumers say friends and family are their top source for brand awareness.",
  },
]

const Steps = ({ logo }) => {
  return (
    <StepsSection>
      <TextContainer>
        <StyledSectionTitle>
          <span>Complete your newsletter,</span>
          <span>with rewards.</span>
        </StyledSectionTitle>
        <StyledSectionSubtitle>
          We're with you every step of the way.
        </StyledSectionSubtitle>
        <StepsList>
          {StepsArray.map(step => (
            <StepContainer key={step.title}>
              <Icon src={step.icon} />
              <StepTitle>{step.title}</StepTitle>
              <StepBody>{step.body}</StepBody>
            </StepContainer>
          ))}
        </StepsList>
        <StyledButton text="Request beta access" />
      </TextContainer>
      <StyledLogo fluid={logo.childImageSharp.fluid} />
    </StepsSection>
  )
}

export default Steps
