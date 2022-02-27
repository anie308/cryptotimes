import React from 'react'
import Banner from '../components/Banner'
import Cta from '../components/Cta'
import Flex from '../components/Flex'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'
import SocialConnect from '../components/SocialConnect'
import TopBar from '../components/TopBar'

function Home() {
  return (
    <>
    <TopBar/>
    <Navbar/>
    <Banner/>
    <Flex/>
    <Cta/>
    <SocialConnect/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default Home