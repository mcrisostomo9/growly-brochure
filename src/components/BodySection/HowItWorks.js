import React from "react"
import SectionTitle from "../Shared/SectionTitle"
import SectionSubtitle from "../Shared/SectionSubtitle"
import styled from "styled-components"
import ContentContainer from "../Shared/ContentContainer"
import Img from "gatsby-image"

const HowItWorksSection = styled(ContentContainer)`
  margin: 5rem auto 7rem;
  text-align: center;
`

const StyledImg = styled(Img)`
  margin-top: 3rem;
`

const HowItWorks = ({ howImage }) => {
  return (
    <HowItWorksSection>
      <SectionTitle>How it works</SectionTitle>
      <SectionSubtitle>
        Works directly with your favorite email service provider
      </SectionSubtitle>
      <StyledImg fluid={howImage.childImageSharp.fluid} />
    </HowItWorksSection>
  )
}

export default HowItWorks
