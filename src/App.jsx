import { useState } from 'react'
import Navbar from '../components/navbar'
import ServiceIMG from '../components/service-bckg'
import MarketingPlan from '../components/marketing-plan'
import Feature1 from '../components/feature1'
import Feature2 from '../components/feature2'
import MarketHome from '../components/markethome'
import WindowFeature from '../components/window-feature'



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
    </>

  )
}

export default App
