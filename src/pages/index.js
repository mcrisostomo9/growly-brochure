import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import Audiences from "../components/Audiences/Audiences"
import Setup from "../components/Setup/Setup"
import BodySection from "../components/BodySection/BodySection"
import Testimonials from "../components/Testimonials/Testimonials"
import RequestAccessModal from "../components/RequestAccessModal/RequestAccessModal"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Audiences />
    <Setup />
    <BodySection />
    <Testimonials />
    <RequestAccessModal />
  </Layout>
)

export default IndexPage
