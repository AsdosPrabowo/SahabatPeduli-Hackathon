import React from 'react'
import Navbar from '../../Components/User/home/Navbar'
import Banner from '../../Components/User/home/banner';
import BansosPurpose from '../../Components/User/about-us/BansosPurpose'
import BansosBenefits from '../../Components/User/about-us/BansosBenefits'

function AboutUs() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <BansosPurpose/>
      <BansosBenefits/>
    </div>
  )
}

export default AboutUs
