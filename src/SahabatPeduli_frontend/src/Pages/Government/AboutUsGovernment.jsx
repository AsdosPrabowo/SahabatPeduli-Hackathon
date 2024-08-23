import React from 'react'
import NavbarGovernment from '../../Components/Government/home/NavbarGovernment'
import Banner from '../../Components/User/home/Banner'
import BansosPurpose from '../../Components/User/about-us/BansosPurpose'
import BansosBenefits from '../../Components/User/about-us/BansosBenefits'
import Footer from '../../Components/User/home/Footer'

function AboutUsGovernment() {
  return (
    <div>
      <NavbarGovernment/>
      <Banner/>
      <BansosPurpose/>
      <BansosBenefits/>
      <Footer/>
    </div>
  )
}

export default AboutUsGovernment
