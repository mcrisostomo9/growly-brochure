import React from "react"
import styled from "styled-components"
import ContentContainer from "../Shared/ContentContainer"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "../Shared/Button"
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"
import { mediaQuery } from "../../utils/styles"

const Root = styled.footer`
  background: var(--dark-grey);
  padding: 2rem 0;
`

const StyledContentContainer = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${mediaQuery.m768}) {
    flex-direction: row;
  }
`

const LeftContainer = styled.div``

const TextContainer = styled.div`
  color: #fff;
  font-size: 0.75rem;
  margin-top: 2rem;
`

const RightContainer = styled.div``

const StyledButton = styled(Button)``

const IconContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`

const SocialIcon = styled.a`
  margin-left: 1rem;
  color: #fff;
  svg,
  img {
    width: 20px;
    height: auto;
  }
`

const SocialArray = [
  {
    icon: <FaInstagram />,
    link: "https://instagram.com",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com",
  },
  {
    icon: <FaFacebookF />,
    link: "https://facebook.com",
  },
]

const Footer = () => {
  const data = useStaticQuery(LOGO_QUERY)
  return (
    <Root>
      <StyledContentContainer>
        <LeftContainer>
          <Img fluid={data.logo.childImageSharp.fluid} />
          <TextContainer>
            ©{new Date().getFullYear()} All Rights Reserved, Growly
          </TextContainer>
        </LeftContainer>
        <RightContainer>
          <StyledButton text="Request Beta access" />
          <IconContainer>
            {SocialArray.map(i => (
              <SocialIcon href={i.link} target="_blank" key={i.link}>
                {i.icon}
              </SocialIcon>
            ))}
          </IconContainer>
        </RightContainer>
      </StyledContentContainer>
    </Root>
  )
}

export default Footer

export const LOGO_QUERY = graphql`
  query LogoQuery {
    logo: file(relativePath: { eq: "footer-logo.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
