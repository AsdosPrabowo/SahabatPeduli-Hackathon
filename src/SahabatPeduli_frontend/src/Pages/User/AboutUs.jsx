import React from 'react'
import Navbar from '../../Components/User/home/Navbar'
import Banner from '../../Components/User/home/Banner';
import BansosPurpose from '../../Components/User/about-us/BansosPurpose'
import BansosBenefits from '../../Components/User/about-us/BansosBenefits'
import Footer from '../../Components/User/home/Footer';

function AboutUs() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <BansosPurpose/>
      <BansosBenefits/>
      <Footer/>
    </div>
  )
}

export default AboutUs
