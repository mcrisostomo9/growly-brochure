import React, { useContext } from "react"
import Modal from "react-modal"
import { Context } from "../../context/Context"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { backgroundGatsbyImage } from "../../utils/styles"
import styled from "styled-components"
import bg from "../../images/modal-bg.png"

const CloseButton = styled.button`
  background: transparent;
  border: none;
  z-index: 2;
`

const ModalContentContainer = styled.div`
  z-index: 10;
  background: url(${bg});
`

const RequestAccessModal = () => {
  const { isModalOpen, toggleModalOpen } = useContext(Context)
  const { heroBg } = useStaticQuery(MODAL_QUERY)
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={toggleModalOpen}
      contentLabel="Request Beta Access Modal"
    >
      <ModalContentContainer>
        {/*<Img*/}
        {/*  style={{ ...backgroundGatsbyImage }}*/}
        {/*  fluid={heroBg.childImageSharp.fluid}*/}
        {/*/>*/}
        <CloseButton onClick={toggleModalOpen}>X</CloseButton>
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
