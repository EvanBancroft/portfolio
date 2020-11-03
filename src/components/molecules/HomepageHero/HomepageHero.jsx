import React from 'react'
import { useStyles } from './styles'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

export const HomepageHero = () => {
  const classes = useStyles()
  const images = useStaticQuery(heroImageQuery)
  return (
    <div className={classes.heroContainer}>
      <div className={classes.textBlock}>
        <h1>
          evan
          <br />
          bancroft
        </h1>
        <div className={classes.line} />
        <h2>
          web developer <br /> content strategy
        </h2>
      </div>
      <Img
        fluid={images.coding.childImageSharp.fluid}
        className={classes.image}
      />
    </div>
  )
}
const heroImageQuery = graphql`
  query {
    coding: file(relativePath: { eq: "riff-staffportrait-evan-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
