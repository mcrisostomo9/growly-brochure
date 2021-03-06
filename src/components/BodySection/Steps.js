import React, { useContext } from "react"
import styled from "styled-components"
import ContentContainer from "../Shared/ContentContainer"
import { mediaQuery } from "../../utils/styles"
import Img from "gatsby-image"
import SectionTitle from "../Shared/SectionTitle"
import SectionSubtitle from "../Shared/SectionSubtitle"
import Button from "../Shared/Button"
import { Context } from "../../context/Context"
import customize from "../../images/customize.svg"
import dashboards from "../../images/dashboards.svg"
import data from "../../images/data.svg"

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

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${mediaQuery.m768}) {
    display: initial;
  }
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

const IconContainer = styled.div`
  background: #fff;
  grid-row: 1/3;
  grid-column: 1/2;
  align-self: center;
  border-radius: 10px;
  width: 80px;
  height: 80px;

  img {
    height: 80px;
    width: 80px;
  }
`

const StepTextContainer = styled.div`
  margin-left: 1.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StepTitle = styled.div`
  font-family: "Proxima Nova", serif;
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
    icon: customize,
    title: "Customized Your Rewards",
    body:
      "Upload your swag and how many referrals it takes for your subscribers to get it.",
  },
  {
    icon: dashboards,
    title: "Beautiful Subscriber Dashboards",
    body:
      "Each one of your subscribers will have a custom dashboard to see their progress and access even more tools to help them share.",
  },
  {
    icon: data,
    title: "Real Time Data",
    body:
      "Through your personal dashboard, track how many referrals your subscribers make, how many convert, and rewards received.",
  },
]

const Steps = ({ logo }) => {
  const { toggleModalOpen } = useContext(Context)
  return (
    <StepsSection>
      <TextContainer>
        <StyledSectionTitle>
          <span>Complete Your Newsletter,</span>
          <span>With Rewards.</span>
        </StyledSectionTitle>
        <StyledSectionSubtitle>
          Your subscribers will love this setup.
        </StyledSectionSubtitle>
        <StepsList>
          {StepsArray.map(step => (
            <StepContainer key={step.title}>
              <IconContainer>
                <img src={step.icon} alt={`${step.title}} icon`} />
              </IconContainer>
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
