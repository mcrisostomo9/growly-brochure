import React, { useContext } from "react"
import GatsbyImage from "gatsby-image"
import styled from "styled-components"
import SectionContainer from "../Shared/SectionContainer"
import SectionTitle from "../Shared/SectionTitle"
import SectionSubtitle from "../Shared/SectionSubtitle"
import ContentContainer from "../Shared/ContentContainer"
import { mediaQuery } from "../../utils/styles"
import Button from "../Shared/Button"
import { Context } from "../../context/Context"
import { graphql, useStaticQuery } from "gatsby"

const StyledSectionContainer = styled(SectionContainer)`
  background: var(--light-grey);
  text-align: center;
`

const StyledSectionTitle = styled(SectionTitle)`
  color: #000;
`

const StyledSectionSubtitle = styled(SectionSubtitle)`
  color: var(--dark-grey);
`

const StyledContentContainer = styled(ContentContainer)`
  margin: 1rem auto 0;

  @media (min-width: ${mediaQuery.m768}) {
    margin-top: 2rem;
  }
`

const GridTestimonial = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2rem;

  @media (min-width: ${mediaQuery.m768}) {
    grid-gap: 3rem;
  }

  @media (min-width: ${mediaQuery.m1024}) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3.5rem 3rem;
  }

  @media (min-width: ${mediaQuery.m1440}) {
    grid-gap: 4.5rem 3rem;
  }
`

const SingleTestimonial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const TestimonialImgWrapper = styled.div`
  width: 100px;
  height: 100px;

  @media (min-width: ${mediaQuery.m1024}) {
    width: 125px;
    height: 125px;
  }

  @media (min-width: ${mediaQuery.m1440}) {
    width: 150px;
    height: 150px;
  }
`

const StyledImage = styled(GatsbyImage)`
  border-radius: 50%;
  width: 100px;
  height: 100px;

  @media (min-width: ${mediaQuery.m1024}) {
    width: 125px;
    height: 125px;
  }

  @media (min-width: ${mediaQuery.m1440}) {
    width: 150px;
    height: 150px;
  }
`

const TextContainer = styled.div`
  text-align: left;
  margin-left: 1rem;
  @media (min-width: ${mediaQuery.m1024}) {
    max-width: 425px;
  }
`

const Name = styled.div`
  font-family: "Proxima Nova", serif;
  font-weight: 700;
  font-size: 1.25rem;

  @media (min-width: ${mediaQuery.m1440}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${mediaQuery.m1680}) {
    font-size: 1.875rem;
  }
`

const TestimonialText = styled.p`
  margin: 0.5rem 0 0;
  line-height: 1.25;
  font-size: 1rem;

  @media (min-width: ${mediaQuery.m768}) {
    font-size: 1.125rem;
  }
`

const Position = styled(TestimonialText)`
  font-weight: 700;
  font-style: italic;
  margin-top: 0.25rem;
`

const StyledButton = styled(Button)`
  margin-top: 5rem;
  justify-self: center;
`

const TestimonialArray = [
  {
    name: "Jessica M.",
    testimonial:
      "Growly helped engage my customers in a unique way.  My email newsletter grew, my sales were impacted, and it was so easy to use!",
    position: "CEO, Founder Winged CBD",
  },
  {
    name: "Nancy K.",
    testimonial:
      "I started sending my blogs through email on a weekly basis and with Growly I’m getting more reads than ever!",
    position: "Influencer/Blogger",
  },
  {
    name: "Tim L.",
    testimonial:
      "As an agency this was a great upsell to my clients. We don't need a dev team to implement it, and it provides enough insights for ust to share big wins for the brands we work with.",
    position: "SVP, Blue Light Media",
  },
  {
    name: "Gregg D.",
    testimonial:
      "I gave away incremental gift cards to my restaurant for each milestone. Now my regulars come in more often, and new customers come in all the time!",
    position: "Owner, Wingnuts Restaurant",
  },
]

const Testimonials = () => {
  const { toggleModalOpen } = useContext(Context)
  const data = useStaticQuery(TESTIMONIALS_QUERY)
  const imgArray = [
    data.testimonial1,
    data.testimonial2,
    data.testimonial3,
    data.testimonial4,
  ]

  return (
    <StyledSectionContainer>
      <StyledSectionTitle>Take their word for it</StyledSectionTitle>
      <StyledSectionSubtitle>
        Brands, agencies, and influencers love the growth
      </StyledSectionSubtitle>
      <StyledContentContainer>
        <GridTestimonial>
          {TestimonialArray.map((i, index) => (
            <SingleTestimonial key={i.name}>
              <TestimonialImgWrapper>
                <StyledImage fluid={imgArray[index].childImageSharp.fluid} />
              </TestimonialImgWrapper>
              <TextContainer>
                <Name>{i.name}</Name>
                <TestimonialText>{i.testimonial}</TestimonialText>
                <Position>{i.position}</Position>
              </TextContainer>
            </SingleTestimonial>
          ))}
        </GridTestimonial>
        <StyledButton text="Request beta access" onClick={toggleModalOpen} />
      </StyledContentContainer>
    </StyledSectionContainer>
  )
}

export default Testimonials

export const TESTIMONIALS_QUERY = graphql`
  query TestimonialImages {
    testimonial1: file(relativePath: { eq: "testimonial1.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    testimonial2: file(relativePath: { eq: "testimonial2.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    testimonial3: file(relativePath: { eq: "testimonial3.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    testimonial4: file(relativePath: { eq: "testimonial4.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
