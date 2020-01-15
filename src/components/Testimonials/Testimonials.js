import React from "react"
import styled from "styled-components"
import SectionContainer from "../Shared/SectionContainer"
import SectionTitle from "../Shared/SectionTitle"
import SectionSubtitle from "../Shared/SectionSubtitle"
import ContentContainer from "../Shared/ContentContainer"
import { mediaQuery } from "../../utils/styles"
import Button from "../Shared/Button"

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

const TestimonialImg = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;

  @media (min-width: ${mediaQuery.m1024}) {
    max-width: 125px;
    max-height: 125px;
  }

  @media (min-width: ${mediaQuery.m1440}) {
    max-width: 150px;
    max-height: 150px;
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
  font-family: "Montserrat", serif;
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
    img: "https://i.picsum.photos/id/431/200/200.jpg",
    name: "Mark Twain",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    position: "Marketing Director",
  },
  {
    img: "https://i.picsum.photos/id/431/200/200.jpg",
    name: "Mark Twayne",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    position: "Marketing Director",
  },
  {
    img: "https://i.picsum.photos/id/431/200/200.jpg",
    name: "Mark Twizzle",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    position: "Marketing Director",
  },
  {
    img: "https://i.picsum.photos/id/431/200/200.jpg",
    name: "Mark T-Money",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    position: "Marketing Director",
  },
]

const Testimonials = () => {
  return (
    <StyledSectionContainer>
      <StyledSectionTitle>Take their word for it</StyledSectionTitle>
      <StyledSectionSubtitle>
        Humans influencing other humans
      </StyledSectionSubtitle>
      <StyledContentContainer>
        <GridTestimonial>
          {TestimonialArray.map(i => (
            <SingleTestimonial key={i.name}>
              <TestimonialImg src={i.img} />
              <TextContainer>
                <Name>{i.name}</Name>
                <TestimonialText>{i.testimonial}</TestimonialText>
                <Position>{i.position}</Position>
              </TextContainer>
            </SingleTestimonial>
          ))}
        </GridTestimonial>
        <StyledButton text="Request beta access" />
      </StyledContentContainer>
    </StyledSectionContainer>
  )
}

export default Testimonials
