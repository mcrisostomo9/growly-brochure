import React from "react"
import styled from "styled-components"
import SectionContainer from "../Shared/SectionContainer"
import SectionTitle from "../Shared/SectionTitle"
import ContentContainer from "../Shared/ContentContainer"
import SectionSubtitle from "../Shared/SectionSubtitle"
import { mediaQuery } from "../../utils/styles"
import explore from "../../images/explore.png"

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

  @media (min-width: ${mediaQuery.m768}) {
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
  { count: 10956, label: "total subscribers", icon: explore },
  { count: 10956, label: "referrals made", icon: explore },
  { count: 10956, label: "rewards claimed", icon: explore },
]

const Audiences = () => {
  return (
    <StyledSectionContainer>
      <ContentContainer>
        <StyledSectionTitle>Activated Audiences</StyledSectionTitle>
        <StyledSectionSubtitle>
          Humans influencing other humans
        </StyledSectionSubtitle>
        <BoxContainer>
          {ContentArray.map(box => (
            <StatisticBox key={box.label}>
              <InnerContainer>
                <StatImage src={box.icon} />
                <Number>{box.count.toLocaleString()}</Number>
              </InnerContainer>
              <StatisticLabel>{box.label}</StatisticLabel>
            </StatisticBox>
          ))}
        </BoxContainer>
      </ContentContainer>
    </StyledSectionContainer>
  )
}

export default Audiences
