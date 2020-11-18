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
        'Evan Bancroft is a web developer and content strategist based out of Southwest Washington. He is a recent graduate of Washington State University Vancouver with a B.A. in Digital Technology and Culture and a minor in Business Administration. Due to this broad degree, Evan is comfortable in a sizeable chunk of the Adobe Suite. In web development, Evan is focused on front-end development using a variety of languages. He specializes in React and Jamstack technologies such as Gatsby.',
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
      alt: 'Evan Bancroft and Ripley the Terrible Cairn Terrier',
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
