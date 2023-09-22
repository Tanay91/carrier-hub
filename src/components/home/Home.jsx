import React from 'react'
import Banner from '../Banner/Banner'
import CategoryList from '../categorylist/CategoryList'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <CategoryList></CategoryList>
        <FeaturedJobs></FeaturedJobs>
      
    </div>
  )
}

export default Home
