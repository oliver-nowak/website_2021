import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`oliver ernst nowak`, `artist`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="about_first_para">
            Oliver Nowak is an artist working with digital media, photography,
            and music.
          </h2>
          <h2 id="about_second_para">
            He is also a data engineer working on Semantic Web technologies and
            Metadata collection/analysis.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3 id="dynamic-styles">microconcerns</h3>
          <p>
            He received his MFA at the School of Visual Arts in NYC in 2008, and
            his Masters in Computer Science from Boston University in 2019.
          </p>
          <p>
            He currently holds three (3) patents around capturing emotion/affect
            data via mobile device.
          </p>
          <p>He presently lives in Boston.</p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(relativePath: { eq: "portrait_thumbnail.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
