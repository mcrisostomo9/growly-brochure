import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Logo = ({ className }) => {
  const { logo } = useStaticQuery(LOGO_QUERY)
  return (
    <Img
      fluid={logo.childImageSharp.fluid}
      alt="Growly Logo"
      className={className}
    />
  )
}
export default Logo

export const LOGO_QUERY = graphql`
  query LogoQuery {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
