import React from "react"
import PropTypes from "prop-types"
import "./normalize.css"
import "./layout.css"
import Header from "../Header/Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
