import React from "react"
import styled from "styled-components"
import SectionContainer from "../Shared/SectionContainer"
import { graphql, useStaticQuery } from "gatsby"
import Steps from "./Steps"
import HowItWorks from "./HowItWorks"
import bg from "../../images/body-bg.png"

const StyledSectionContainer = styled(SectionContainer)`
  background: url(${bg}) no-repeat bottom;
  background-size: cover;
  //background-position: bottom;
`

const BodySection = () => {
  const data = useStaticQuery(BODY_IMAGE_QUERY)

  return (
    <StyledSectionContainer>
      <Steps logo={data.logo} />
      <HowItWorks howImage={data.howImage} />
    </StyledSectionContainer>
  )
}

export default BodySection

export const BODY_IMAGE_QUERY = graphql`
  query BodyImageQuery {
    logo: file(relativePath: { eq: "large-logo.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    howImage: file(relativePath: { eq: "how-it-works.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
