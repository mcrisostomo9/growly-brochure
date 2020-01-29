import React from "react"
import SectionTitle from "../Shared/SectionTitle"
import SectionSubtitle from "../Shared/SectionSubtitle"
import styled from "styled-components"
import ContentContainer from "../Shared/ContentContainer"
import Img from "gatsby-image"
import imgGif from "../../images/how-it-works.gif"

const HowItWorksSection = styled(ContentContainer)`
  margin: 5rem auto 7rem;
  text-align: center;
`

const GifContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: auto;
  }
`

const HowItWorks = () => {
  return (
    <HowItWorksSection>
      <SectionTitle>How it works</SectionTitle>
      <SectionSubtitle>
        Works directly with your favorite email service provider
      </SectionSubtitle>
      <GifContainer>
        <img src={imgGif} alt="How Growly Works" />
      </GifContainer>
    </HowItWorksSection>
  )
}

export default HowItWorks
