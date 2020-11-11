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
      smallFluid: images.lswSmall.childImageSharp.fluid,
      alt: 'LSW Architects Website',
      title: 'LSW',
      siteLink: 'https://lswarchitects.com/',
      siteLinkPretty: 'lswachitects.com',
      siteCopy:
        'Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ',
      color: COLOR.LSW_ORANGE,
      fullTitle: 'LSW Architects Site',
    },
    {
      smallFluid: images.lswSmall.childImageSharp.fluid,
      alt: 'LSW Architects Website',
      title: 'RIFF_',
      siteLink: 'https://lswarchitects.com/',
      siteLinkPretty: 'lswachitects.com',
      siteCopy:
        'Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ',
      color: COLOR.PURPLE,
      fullTitle: 'LSW Architects Site',
    },
    {
      smallFluid: images.lswSmall.childImageSharp.fluid,
      alt: 'LSW Architects Website',
      title: 'JEEP',
      siteLink: 'https://lswarchitects.com/',
      siteLinkPretty: 'lswachitects.com',
      siteCopy:
        'Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ',
      color: COLOR.GREEN,
      fullTitle: 'LSW Architects Site',
    },
    {
      smallFluid: images.lswSmall.childImageSharp.fluid,
      alt: 'LSW Architects Website',
      title: 'ELO',
      siteLink: 'https://lswarchitects.com/',
      siteLinkPretty: 'lswachitects.com',
      siteCopy:
        'Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ',
      color: COLOR.RED,
      fullTitle: 'LSW Architects Site',
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
    lswSmall: file(relativePath: { eq: "lswSmall.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
