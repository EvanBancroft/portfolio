import React from 'react'

import { Seo } from '@atoms'
import { Layout } from '@organisms'
import { HomepageHero } from '@molecules'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <HomepageHero />
    </Layout>
  )
}
export default IndexPage
