import { useState } from 'react'
import Navbar from '../components/navbar'
import ServiceIMG from '../components/service-bckg'
import MarketingPlan from '../components/marketing-plan'
import Feature1 from '../components/feature1'
import Feature2 from '../components/feature2'
import MarketHome from '../components/markethome'
import WindowFeature from '../components/window-feature'
import LaptopImg from '../components/laptop-img'
import WindowFeature2 from '../components/window-feature2'
import WindowFeature3 from '../components/window-feature3'

import TestPage from '../components/testpage'


function App() {


  return (

    <>
    <Navbar />
    <ServiceIMG style={{marginBottom: '100px'}}/>
    <MarketingPlan />
    <Feature1 />
    <MarketHome />
    <Feature2 />
    <WindowFeature />
    <LaptopImg />
    <WindowFeature2 />
    <WindowFeature3 />

    <TestPage />
    </>

  )
}

export default App
