import React from 'react'
import Layout from '../../Components/Layout/Layout'
import HeroSection from '../../Components/heroSection/HeroSection'
import BlogPostCard from '../../Components/blogPostCard/BlogPostCard'

function Home() {
  return (
    <Layout>
        <HeroSection/>
        <BlogPostCard/>
    </Layout>
  )
}

export default Home