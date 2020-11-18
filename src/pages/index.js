import React from 'react'

import { Seo } from '@atoms'
import { Layout, WorkSection } from '@organisms'
import { HomepageHero } from '@molecules'
import { useStaticQuery, graphql } from 'gatsby'

import { COLOR } from '@constants'

const IndexPage = () => {
  const images = useStaticQuery(worksImagesQuery)

  const worksData = [
    {
      smallFluid: images.lsw.childImageSharp.fluid,
      alt: 'LSW Architects Landing Page',
      title: 'LSW',
      siteLink: 'https://lswarchitects.com/',
      siteLinkPretty: 'lswachitects.com',
      siteCopy:
        'Collaborated with the team at Riff Creative Studio to produce a complete reworking of the LSW Architects site. The site transitioned the client from WordPress to Jamstack technologies Gatsby, Contentful, and Netlify to create a fast site and seamless CMS experience. Project was developed fully remote. ',
      color: COLOR.LSW_ORANGE,
      fullTitle: 'LSW Architects Site',
    },
    {
      smallFluid: images.riff.childImageSharp.fluid,
      alt: 'Riff Creative Landing Page',
      title: 'RIFF_',
      siteLink: 'https://riffcreativestudio.com/',
      siteLinkPretty: 'riffcreativestudio.com',
      siteCopy:
        "Worked with the team at Riff Creative Studio to build out the static framework for the launch of their website. The site is image forward to display the studio's work. Netlify and Gatsby were the technologies of choice to ensure that the site was fast without compromising image quality or quantity.  ",
      color: COLOR.PURPLE,
      fullTitle: 'Riff Creative Website',
    },
    {
      smallFluid: images.jeep.childImageSharp.fluid,
      alt: 'Jeep Case Study',
      title: 'JEEP',
      siteLink: 'https://tinyurl.com/jeepsocial',
      siteLinkPretty: 'Case Study Link',
      siteCopy:
        'Report on the social media marketing strategy that Jeep executed in tandem with their Jeep Groundhog Day Super Bowl Commercial. The report utilized analytics of all major postings in the campaign to draw conclusions and offer feedback on where Jeep could have acted to maximize the moment that the campaign created. ',
      color: COLOR.GREEN,
      fullTitle: 'JEEP Super Bowl Case Study',
    },
    {
      smallFluid: images.elo.childImageSharp.fluid,
      alt: 'Electronic Literature Organization Website Prototype',
      title: 'ELO',
      siteLink: 'https://elo-website.org/',
      siteLinkPretty: 'Site Not Live',
      siteCopy:
        'Electronic Literature Repository Rebuild constitutes Phase 1 of the redevelopment of a repository of 2108 works held in 26 collections of born-digital media for the international arts organization, Electronic Literature Organization.',
      color: COLOR.RED,
      fullTitle: 'ELO Website Rebuild Phase 1',
    },
  ]
  return (
    <Layout>
      <Seo title="Home" />
      <HomepageHero />
      {/* each work session can only house 4 submissions */}
      <WorkSection data={worksData} />
    </Layout>
  )
}
export default IndexPage

const worksImagesQuery = graphql`
  query {
    lsw: file(relativePath: { eq: "lsw-site.png" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    riff: file(relativePath: { eq: "riff-site.png" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jeep: file(relativePath: { eq: "jeep-case.png" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    elo: file(relativePath: { eq: "elo-proto.png" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
