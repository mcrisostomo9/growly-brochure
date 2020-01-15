import React, { useContext } from "react"
import Modal from "react-modal"
import { Context } from "../../context/Context"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { backgroundGatsbyImage } from "../../utils/styles"
import styled from "styled-components"
import RequestForm from "../Form/RequestForm"

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
`

const ModalContentContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LogoContainer = styled.div`
  width: 100%;
  height: auto;
  max-width: 388px;
`

const TextContainer = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
`

const RequestTitle = styled.h2`
  font-size: 2.25rem;
  letter-spacing: 2px;
  color: #010101;
`

const RequestSubtitle = styled.p`
  color: #2e2e2e;
  font-size: 1.5rem;
  line-height: 1.5;
`

const customStyles = {
  content: {
    padding: 0,
  },
}

const RequestAccessModal = () => {
  const { isModalOpen, toggleModalOpen } = useContext(Context)
  const { heroBg, logo } = useStaticQuery(MODAL_QUERY)

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
          <Img fluid={logo.childImageSharp.fluid} />
        </LogoContainer>
        <TextContainer>
          <RequestTitle>Beta Request Access</RequestTitle>
          <RequestSubtitle>
            Have a newsletter? We're inviting a selected few to try our
            signature solution.
          </RequestSubtitle>
        </TextContainer>
        <RequestForm />
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
    logo: file(relativePath: { eq: "header-logo.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
