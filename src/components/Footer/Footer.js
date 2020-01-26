import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import ContentContainer from "../Shared/ContentContainer"
import Button from "../Shared/Button"
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"
import { mediaQuery } from "../../utils/styles"
import { Context } from "../../context/Context"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Root = styled.footer`
  background: var(--dark-grey);
  padding: 2rem 0;
`

const StyledContentContainer = styled(ContentContainer)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  grid-template-areas: "logo" "button" "social" "copyright";
  justify-items: center;

  @media (min-width: ${mediaQuery.m640}) {
    justify-items: initial;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: "logo button" "copyright social";
  }
`

const StyledLink = styled(Link)`
  max-width: 150px;
  width: 100%;
  grid-area: logo;
`

const Copyright = styled.div`
  color: #fff;
  font-size: 0.75rem;
  grid-area: copyright;
  //align-self: end;
`

const StyledButton = styled(Button)`
  grid-area: button;
  font-size: 0.75rem;
  margin-top: 1.5rem;

  @media (min-width: ${mediaQuery.m640}) {
    justify-self: end;
    margin-top: 0;
  }

  @media (min-width: ${mediaQuery.m768}) {
    padding: 1rem 1.5rem;
  }

  @media (min-width: ${mediaQuery.m1024}) {
    padding: 1rem;
  }
`

const SocialContainer = styled.div`
  display: flex;
  grid-area: social;

  @media (min-width: ${mediaQuery.m640}) {
    justify-self: end;
  }
`

const SocialIcon = styled.a`
  margin-left: 1rem;
  color: #fff;
  svg,
  img {
    width: 20px;
    height: auto;
  }

  :focus,
  :active {
    outline: none;
    border: 1px solid var(--blue);
  }
`

const SocialArray = [
  {
    icon: <FaInstagram />,
    link: "https://instagram.com/growlyapp/",
    label: "Growly Instagram Link",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/growlyapp",
    label: "Growly Twitter Link",
  },
  {
    icon: <FaFacebookF />,
    link: "https://facebook.com/growlyapp",
    label: "Growly Facebook Link",
  },
]

const Footer = () => {
  const { toggleModalOpen, isModalOpen } = useContext(Context)
  const { logo } = useStaticQuery(FOOTER_QUERY)

  return (
    <Root isModalOpen={isModalOpen}>
      <StyledContentContainer>
        <StyledLink to="/">
          <Img fluid={logo.childImageSharp.fluid} alt="Growly Logo" />
        </StyledLink>
        <Copyright>
          ©{new Date().getFullYear()} All Rights Reserved, Growly
        </Copyright>
        <StyledButton text="Request Beta access" onClick={toggleModalOpen} />
        <SocialContainer>
          {SocialArray.map(i => (
            <SocialIcon
              href={i.link}
              target="_blank"
              key={i.link}
              aria-label={i.label}
              rel="noopener"
            >
              {i.icon}
            </SocialIcon>
          ))}
        </SocialContainer>
      </StyledContentContainer>
    </Root>
  )
}

export default Footer

export const FOOTER_QUERY = graphql`
  query FooterQuery {
    logo: file(relativePath: { eq: "footer-logo.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
