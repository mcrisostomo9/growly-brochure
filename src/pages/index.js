import React from "react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Audiences from "../components/Audiences/Audiences"
import Setup from "../components/Setup/Setup"
import BodySection from "../components/BodySection/BodySection"
import Testimonials from "../components/Testimonials/Testimonials"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Audiences />
      <Setup />
      <BodySection />
      <Testimonials />
    </Layout>
  )
}

export default IndexPage
