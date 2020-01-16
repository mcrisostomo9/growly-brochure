import React from "react"
import styled from "styled-components"
import SectionContainer from "../Shared/SectionContainer"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Steps from "./Steps"
import HowItWorks from "./HowItWorks"
import { backgroundGatsbyImage } from "../../utils/styles"

const StyledSectionContainer = styled(SectionContainer)`
  position: relative;
`

const BodySection = () => {
  const data = useStaticQuery(BODY_IMAGE_QUERY)

  return (
    <StyledSectionContainer>
      <Img
        style={{ ...backgroundGatsbyImage }}
        fluid={data.bgImage.childImageSharp.fluid}
        backgroundColor="#fffafd"
      />
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
    bgImage: file(relativePath: { eq: "body-bg.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
