import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import NavbarHindi from '../../components/navbar/NavbarHindi'

import MyCarousel from '../../components/carousel/Carousel'
import Events from '../../components/landingPageComponents/Events'
import TweeterSectionBanner from '../../components/landingPageComponents/TweeterSectionBanner'
import TweeterSectionBannerHindi from '../../components/landingPageComponents/TwitterSectionBannerHindi'
import BuyNowSection from '../../components/landingPageComponents/BuyNowSection'
import Allproducts from '../../components/landingPageComponents/Allproducts'

import AllProductsHindi from '../../components/landingPageComponents/AllProductsHindi'
import BannerforAD from '../../components/landingPageComponents/BannerforAD'
import CopyrightContent from '../../components/landingPageComponents/CopyrightContent'
import CopyRightContentHindi from '../../components/landingPageComponents/CopyRightContentHindi'
import Footer from '../../components/footer/Footer'
import FooterHindi from '../../components/footer/FooterHindi'
import { useLanguage } from '../../components/Context/Context'
import BuyNowSectionHindi from '../../components/landingPageComponents/BuyNowSectionHindi'
import BannerforADHindi from "../../components/landingPageComponents/BannerforADHindi"
import AlertDialogSlide from '../../components/cookiesAccept/CookiesAccept'
const Home = () => {
   
  const { language, toggleLanguage } = useLanguage();
  return (
  <>



{
language==="ENGLISH"?(
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
<AlertDialogSlide/>

  </>
):(
<>

<NavbarHindi/>
<MyCarousel/>
<Events/>
<TweeterSectionBannerHindi/>
<BuyNowSectionHindi/>
<AllProductsHindi/>
<BannerforADHindi/>
<CopyRightContentHindi/>
<FooterHindi/>
</>


)

}









  </>
  )
}

export default Home