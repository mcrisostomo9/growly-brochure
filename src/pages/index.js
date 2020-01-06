import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
