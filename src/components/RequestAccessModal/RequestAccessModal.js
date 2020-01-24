import React, { useContext } from "react"
import Modal from "react-modal"
import { Context } from "../../context/Context"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { backgroundGatsbyImage, mediaQuery } from "../../utils/styles"
import styled from "styled-components"
import RequestForm from "../Form/RequestForm"
import logo from "../../images/logo.svg"

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
  max-width: 200px;
  margin: 0 auto;

  @media (min-width: ${mediaQuery.m1024}) {
    max-width: 250px;
  }

  @media (min-width: ${mediaQuery.m1280}) {
    max-width: 300px;
  }

  @media (min-width: ${mediaQuery.m1440}) {
    max-width: 325px;
  }

  @media (min-width: ${mediaQuery.m1680}) {
    max-width: 380px;
  }

  img {
    width: 100%;
    height: auto;
  }
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

const customStyles = {
  overlay: { zIndex: 10 },
  content: {
    padding: 0,
    border: "none",
    top: "5%",
    right: "5%",
    left: "5%",
    bottom: "5%",
    zIndex: "5%",
  },
}

const RequestAccessModal = () => {
  const { isModalOpen, toggleModalOpen, isRequestReceived } = useContext(
    Context
  )
  const { heroBg } = useStaticQuery(MODAL_QUERY)

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={toggleModalOpen}
      contentLabel="Request Beta Access Modal"
      style={customStyles}
    >
      <Img
        style={{ ...backgroundGatsbyImage, zIndex: 0 }}
        fluid={heroBg.childImageSharp.fluid}
      />
      <CloseButton onClick={toggleModalOpen}>X</CloseButton>
      <ModalContentContainer>
        <LogoContainer>
          <img src={logo} alt="Growly Logo" />
        </LogoContainer>
        {isRequestReceived ? (
          <TextContainer>
            <RequestTitle>Request Received!</RequestTitle>
            <ReceivedSubtitle>
              You’re in line! We’ll circle back soon & be in touch with next
              steps. <span>Grow-on!</span>
            </ReceivedSubtitle>
          </TextContainer>
        ) : (
          <>
            <TextContainer>
              <RequestTitle>Beta Access Request</RequestTitle>
              <RequestSubtitle>
                Have a newsletter? We're inviting a selected few to try our
                signature solution.
              </RequestSubtitle>
            </TextContainer>
            <RequestForm />
          </>
        )}
      </ModalContentContainer>
    </Modal>
  )
}

export default RequestAccessModal

export const MODAL_QUERY = graphql`
  query ModalQuery {
    heroBg: file(relativePath: { eq: "modal-bg.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
