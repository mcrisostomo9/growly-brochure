import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import Audiences from "../components/Audiences/Audiences"
import Setup from "../components/Setup/Setup"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Audiences />
    <Setup />
  </Layout>
)

export default IndexPage
