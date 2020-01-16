import React, { useContext } from "react"
import styled from "styled-components"
import ContentContainer from "../Shared/ContentContainer"
import { mediaQuery } from "../../utils/styles"
import Img from "gatsby-image"
import SectionTitle from "../Shared/SectionTitle"
import SectionSubtitle from "../Shared/SectionSubtitle"
import icon from "../../images/steps-icon.svg"
import Button from "../Shared/Button"
import { Context } from "../../context/Context"

const StepsSection = styled(ContentContainer)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  @media (min-width: ${mediaQuery.m768}) {
    grid-template-columns: 2fr 1fr;
    padding-right: 0;
  }

  @media (min-width: ${mediaQuery.m1024}) {
    grid-template-columns: 3fr 2fr;
  }

  @media (min-width: ${mediaQuery.m1680}) {
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

  text-align: center;

  @media (min-width: ${mediaQuery.m768}) {
    text-align: left;
  }
`

const StyledSectionSubtitle = styled(SectionSubtitle)`
  text-align: center;

  @media (min-width: ${mediaQuery.m768}) {
    text-align: left;
  }
`

const StepsList = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 2rem;

  @media (min-width: ${mediaQuery.m768}) {
    margin-top: 2.25rem;
  }

  @media (min-width: ${mediaQuery.m1024}) {
    margin-top: 2.5rem;
  }

  @media (min-width: ${mediaQuery.m1280}) {
    margin-top: 3rem;
  }
`

const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Icon = styled.img`
  grid-row: 1/3;
  grid-column: 1/2;
  align-self: center;
`

const StepTextContainer = styled.div`
  margin-left: 1.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StepTitle = styled.div`
  font-family: "Montserrat", serif;
  font-weight: 700;
  font-size: 1.15rem;
  align-self: flex-start;

  @media (min-width: ${mediaQuery.m768}) {
    font-size: 1.25rem;
  }

  @media (min-width: ${mediaQuery.m1024}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${mediaQuery.m1280}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${mediaQuery.m1680}) {
    font-size: 1.875rem;
  }
`
const StepBody = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  align-self: start;
  margin-top: 0.5rem;
  line-height: 1.25;

  @media (min-width: ${mediaQuery.m768}) {
    font-size: 1.125rem;
    max-width: 380px;
  }
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
  const { toggleModalOpen } = useContext(Context)

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
              <StepTextContainer>
                <StepTitle>{step.title}</StepTitle>
                <StepBody>{step.body}</StepBody>
              </StepTextContainer>
            </StepContainer>
          ))}
        </StepsList>
        <StyledButton text="Request beta access" onClick={toggleModalOpen} />
      </TextContainer>
      <StyledLogo fluid={logo.childImageSharp.fluid} />
    </StepsSection>
  )
}

export default Steps
