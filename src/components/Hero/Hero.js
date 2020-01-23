import React, { useContext } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { backgroundGatsbyImage, mediaQuery } from "../../utils/styles"
import ContentContainer from "../Shared/ContentContainer"
import Button from "../Shared/Button"
import SectionTitle from "../Shared/SectionTitle"
import SectionSubtitle from "../Shared/SectionSubtitle"
import { Context } from "../../context/Context"

const Root = styled.div`
  position: relative;
  padding: 7rem 0 3rem;
`

const StyledContainer = styled(ContentContainer)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  @media (min-width: ${mediaQuery.m768}) {
    grid-template-columns: 3fr 2fr;
  }

  @media (min-width: ${mediaQuery.m1024}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${mediaQuery.m1440}) {
    grid-template-columns: 3fr 2fr;
  }

  @media (min-width: ${mediaQuery.m1680}) {
    grid-template-columns: 1fr 1fr;
  }
`

const TextContainer = styled.div`
  color: var(--dark-grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: ${mediaQuery.m768}) {
    text-align: left;
    align-items: flex-start;
  }
`

const HeroTitle = styled(SectionTitle)`
  span {
    display: block;
  }
`

const HeroSubtext = styled(SectionSubtitle)``

const StyledButton = styled(Button)`
  margin-top: 2rem;
`

const StyledImg = styled(Img)`
  display: none;

  @media (min-width: ${mediaQuery.m768}) {
    display: initial;
  }
`

const Hero = () => {
  const data = useStaticQuery(HERO_QUERY)
  const { toggleModalOpen } = useContext(Context)
  return (
    <Root>
      <Img
        fluid={data.heroBg.childImageSharp.fluid}
        style={{ ...backgroundGatsbyImage }}
        backgroundColor="#fffafd"
      />
      <StyledContainer>
        <TextContainer>
          <HeroTitle as="h1">
            <span>A Referral System</span> <span>Made For Newsletters</span>
          </HeroTitle>
          <HeroSubtext>
            Empower your subscribers to promote your brand.
          </HeroSubtext>
          <StyledButton text="Request beta access" onClick={toggleModalOpen} />
        </TextContainer>
        <StyledImg fluid={data.heroImg.childImageSharp.fluid} />
      </StyledContainer>
    </Root>
  )
}

export default Hero

export const HERO_QUERY = graphql`
  query HeroQuery {
    heroBg: file(relativePath: { eq: "hero-bg.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    heroImg: file(relativePath: { eq: "hero-image.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
