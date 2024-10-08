import React from 'react'
import Navbar from '../../Components/User/home/Navbar'
import DanaSosial from '../../Components/User/home/DanaSosial'
import Banner from '../../Components/User/home/Banner';

import BansosProblems from '../../Components/User/home/BansosProblems'
import DanaProspects from '../../Components/User/home/DanaProspects'
import Footer from '../../Components/User/home/Footer';
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <DanaSosial/>
      <BansosProblems/>
      <DanaProspects/>
      <Footer/>
    </div>
  )
}
