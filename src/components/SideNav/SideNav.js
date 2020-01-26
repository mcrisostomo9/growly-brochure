import React, { useCallback, useContext, useRef, useEffect } from "react"
import styled from "styled-components"
import { animated, useTransition } from "react-spring"
import { backgroundGatsbyImage, mediaQuery } from "../../utils/styles"
import { Context } from "../../context/Context"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import RequestForm from "../Form/RequestForm"

const Root = styled(animated.div)`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 50;
  overflow-y: auto;
  background: #fff;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: ${mediaQuery.m1024}) {
    width: 40vw;
    min-width: 500px;
  }
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  z-index: 2;
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: #fff;
  cursor: pointer;
  font-size: 25px;

  :hover {
    color: #2e2e2e;
  }

  :focus,
  :active {
    outline: none;
    color: #2e2e2e;
  }
`

const ModalContentContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  position: relative;
  display: grid;
  grid-gap: 1rem;
  grid-auto-rows: min-content;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  align-content: center;
`

const LogoContainer = styled.div`
  width: 100%;
  height: auto;
  max-width: 125px;
  margin: 0 auto;
`

const TextContainer = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
`

const RequestTitle = styled.h2`
  letter-spacing: 4px;
  color: #010101;
  font-size: 1.75rem;
  margin: 1rem 0;

  @media (min-width: ${mediaQuery.m768}) {
    font-size: 2.25rem;
  }
`

const RequestSubtitle = styled.p`
  color: #2e2e2e;
  font-size: 1.25rem;
  line-height: 1.25;
  margin: 0;

  @media (min-width: ${mediaQuery.m768}) {
    font-size: 1.5rem;
  }
`

const ReceivedSubtitle = styled(RequestSubtitle)`
  margin-top: 2rem;

  span {
    display: block;
    margin-top: 3rem;
  }
`

const SideNav = () => {
  const rootRef = useRef()
  const formRef = useRef()
  const { isModalOpen, toggleModalOpen, isRequestReceived } = useContext(
    Context
  )
  const { heroBg, logo } = useStaticQuery(MODAL_QUERY)
  const sideAnimation = useTransition(isModalOpen, null, {
    from: { transform: "translate3d(100%,0,0)" },
    enter: { transform: "translate3d(0,0,0)" },
    leave: { transform: "translate3d(100%,0,0)" },
  })

  const handleClickOutside = useCallback(
    e => {
      if (rootRef.current.contains(e.target)) {
        // inside click
        return
      }
      // outside click
      console.log(e.target)

      console.log("this is outside click")
      // toggleModalOpen()
    },
    [toggleModalOpen]
  )

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isModalOpen, handleClickOutside])

  console.log(`is modal open ${isModalOpen}`)

  return sideAnimation.map(
    ({ item, key, props }) =>
      item && (
        <Root key={key} style={props} ref={rootRef}>
          <Img
            style={{ ...backgroundGatsbyImage, zIndex: 0 }}
            fluid={heroBg.childImageSharp.fluid}
          />
          <CloseButton onClick={toggleModalOpen}>X</CloseButton>
          <ModalContentContainer>
            <LogoContainer>
              <Img fluid={logo.childImageSharp.fluid} alt="Growly Logo" />
            </LogoContainer>
            {isRequestReceived ? (
              <TextContainer>
                <RequestTitle>Request Received!</RequestTitle>
                <ReceivedSubtitle>
                  We're looking for beta users today. We'll be in touch very
                  soon to discuss next steps.<span>Grow-on!</span>
                </ReceivedSubtitle>
              </TextContainer>
            ) : (
              <>
                <TextContainer>
                  <RequestTitle>Want to give it a go?</RequestTitle>
                  <RequestSubtitle>
                    We're accepting a select few to try Growly. Beta users
                    receive grandfathered pricing & long-term perks!
                  </RequestSubtitle>
                </TextContainer>
                <RequestForm />
              </>
            )}
          </ModalContentContainer>
        </Root>
      )
  )
}

export default SideNav

export const MODAL_QUERY = graphql`
  query ModalQuery {
    heroBg: file(relativePath: { eq: "modal-bg.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    logo: file(relativePath: { eq: "logo-white.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
