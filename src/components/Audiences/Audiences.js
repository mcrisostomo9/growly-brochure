import React from "react"
import styled from "styled-components"
import { useCountUp } from "react-countup"
import SectionContainer from "../Shared/SectionContainer"
import SectionTitle from "../Shared/SectionTitle"
import ContentContainer from "../Shared/ContentContainer"
import SectionSubtitle from "../Shared/SectionSubtitle"
import { mediaQuery } from "../../utils/styles"
import explore from "../../images/explore.svg"

const StyledSectionContainer = styled(SectionContainer)`
  background: var(--light-grey);
  text-align: center;
`

const StyledSectionTitle = styled(SectionTitle)`
  color: #000;
`

const StyledSectionSubtitle = styled(SectionSubtitle)``

const BoxContainer = styled.div`
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${mediaQuery.m768}) {
    margin-top: 3rem;
    flex-direction: row;
  }
`

const StatisticBox = styled.div`
  flex-basis: 25%;
  margin-bottom: 1rem;
  max-width: 330px;
  width: 100%;

  @media (min-width: ${mediaQuery.m768}) {
    width: initial;
  }
`

const InnerContainer = styled.div`
  background: var(--pink);
  padding: 1rem 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StatImage = styled.img``

const Number = styled.span`
  color: #fff;
  font-size: 2.5rem;
  margin-left: 1rem;
  font-family: "Proxima Nova", serif;
  font-weight: 400;

  @media (min-width: ${mediaQuery.m768}) {
    font-size: 1.75rem;
  }

  @media (min-width: ${mediaQuery.m1024}) {
    font-size: 2.25rem;
  }

  @media (min-width: ${mediaQuery.m1280}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${mediaQuery.m1440}) {
    font-size: 3rem;
  }

  @media (min-width: ${mediaQuery.m1680}) {
    font-size: 4rem;
  }
`

const StatisticLabel = styled.div`
  color: var(--dark-grey);
  text-align: right;
  margin-top: 0.5rem;
`

const ContentArray = [
  { label: "total subscribers", icon: explore },
  { label: "referrals made", icon: explore },
  { label: "rewards claimed", icon: explore },
]

const Audiences = () => {
  const subscribersCount = useCountUp({
    startOnMount: true,
    start: 10000,
    end: 25000,
    duration: 3000,
    separator: ",",
  })
  const referralsCount = useCountUp({
    startOnMount: true,
    start: 2500,
    end: 10000,
    duration: 4000,
    separator: ",",
  })
  const rewardsCount = useCountUp({
    startOnMount: true,
    start: 1000,
    end: 5000,
    duration: 4500,
    separator: ",",
  })
  return (
    <StyledSectionContainer>
      <ContentContainer>
        <StyledSectionTitle>Growing Audiences</StyledSectionTitle>
        <StyledSectionSubtitle>Build brand loyalty</StyledSectionSubtitle>
        <BoxContainer>
          {ContentArray.map((box, i) => {
            let count
            if (i === 0) {
              count = subscribersCount.countUp
            } else if (i === 1) {
              count = referralsCount.countUp
            } else {
              count = rewardsCount.countUp
            }
            return (
              <StatisticBox key={box.label}>
                <InnerContainer>
                  <StatImage src={box.icon} />
                  <Number>{count}</Number>
                </InnerContainer>
                <StatisticLabel>{box.label}</StatisticLabel>
              </StatisticBox>
            )
          })}
        </BoxContainer>
      </ContentContainer>
    </StyledSectionContainer>
  )
}

export default Audiences
