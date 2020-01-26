import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./normalize.css"
import "./layout.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Context } from "../../context/Context"
import SideNav from "../SideNav/SideNav"
import SEO from "../seo"

const Main = styled.main``

const Layout = ({ children }) => {
  const { isModalOpen } = useContext(Context)
  return (
    <>
      <SEO />
      <Header />
      <Main isModalOpen={isModalOpen}>{children}</Main>
      <Footer />
      <SideNav />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
