import React from 'react'
import Navbar from '../../components/navbar/Navbar'

import MyCarousel from '../../components/carousel/Carousel'
import Events from '../../components/landingPageComponents/Events'
import TweeterSectionBanner from '../../components/landingPageComponents/TweeterSectionBanner'
import BuyNowSection from '../../components/landingPageComponents/BuyNowSection'
import Allproducts from '../../components/landingPageComponents/Allproducts'
import BannerforAD from '../../components/landingPageComponents/BannerforAD'
import CopyrightContent from '../../components/landingPageComponents/CopyrightContent'
import Footer from '../../components/footer/Footer'

const Home = () => {
   
  return (
  <>


<Navbar/>



<MyCarousel/>
<Events/>



<TweeterSectionBanner/>
<BuyNowSection/>
<Allproducts/>
<BannerforAD/>
<CopyrightContent/>
<Footer/>


  </>
  )
}

export default Home