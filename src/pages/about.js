import React from 'react'
import { Seo } from '@atoms'
import { Layout } from '@organisms'
import { useStaticQuery, graphql } from 'gatsby'

import { AboutGrid } from '@organisms'

const About = () => {
  const images = useStaticQuery(worksImagesQuery)

  const gridData = [
    {
      title: 'about',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      fluid: images.item1.childImageSharp.fluid,
      alt: 'Evan Bancroft sitting in his favorite IKEA chair',
      type: 'normal',
    },
    {
      title: 'skills',
      body: [
        'Gatsby.js',
        'Graphql',
        'React',
        'HTML5',
        'CSS3',
        'JavaScript',
        'Remote Work',
        'Headless CMS',
        'Slack',
        'Basecamp',
      ],
      fluid: images.item2.childImageSharp.fluid,
      type: 'skills',
      alt: 'Evan Bancroft slinging code',
      reverse: true,
      reverseMobile: true,
    },
    {
      title: 'contact',
      mail: 'hello@evanbancroft.com',
      number: '360-857-9555',
      fluid: images.item3.childImageSharp.fluid,
      alt: 'Evan Bancroft and Ripley the Cairn Terrier',
      type: 'contact',
      reverseMobile: true,
    },
  ]
  return (
    <Layout>
      <Seo title="About" />
      <AboutGrid data={gridData} />
    </Layout>
  )
}
export default About

const worksImagesQuery = graphql`
  query {
    item1: file(relativePath: { eq: "Evan Bancroft.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    item2: file(relativePath: { eq: "coding.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    item3: file(relativePath: { eq: "Ripley.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
