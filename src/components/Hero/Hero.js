import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { backgroundGatsbyImage, mediaQuery } from "../../utils/styles"
import Container from "../Shared/Container"
import Button from "../Shared/Button"
import SectionTitle from "../Shared/SectionTitle"

const Root = styled.div`
  position: relative;
  padding: 7rem 0 3rem;
`

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  @media (min-width: ${mediaQuery.m768}) {
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
  margin-bottom: 0;

  span {
    display: block;
  }
`

const HeroSubtext = styled.p`
  margin: 1rem 0 0;
  font-size: 1.25rem;

  @media (min-width: ${mediaQuery.m1024}) {
    font-size: 1.25rem;
  }

  @media (min-width: ${mediaQuery.m1280}) {
  }

  @media (min-width: ${mediaQuery.m1440}) {
    font-size: 1.5rem;
  }
`

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
  return (
    <Root>
      <Img
        fluid={data.heroBg.childImageSharp.fluid}
        style={{ ...backgroundGatsbyImage }}
        // imgStyle={{ objectPosition: "75%" }}
      />
      <StyledContainer>
        <TextContainer>
          <HeroTitle as="h1">
            <span>Referral system</span> <span>made for newsletters</span>
          </HeroTitle>
          <HeroSubtext>
            Activate current subscribers to promote your company
          </HeroSubtext>
          <StyledButton text="Request beta access" />
        </TextContainer>
        <StyledImg
          fluid={data.heroImg.childImageSharp.fluid}
          // style={{ ...backgroundGatsbyImage, left: "-50%", width: "initial" }}
        />
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
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroImg: file(relativePath: { eq: "hero-image.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
