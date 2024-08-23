import React from 'react'
import NavbarGovernment from '../../Components/Government/home/NavbarGovernment'
import DanaSosial from '../../Components/User/home/DanaSosial'
import BansosProblems from '../../Components/User/home/BansosProblems'
import DanaProspects from '../../Components/User/home/DanaProspects'
import Banner from '../../Components/User/home/Banner'
import Footer from '../../Components/User/home/Footer'

function HomeGovernment() {
  return (
    <div>
      <NavbarGovernment/>
      <Banner/>
      <DanaSosial/>
      <BansosProblems/>
      <DanaProspects/>
      <Footer/>
    </div>
  )
}

export default HomeGovernment
