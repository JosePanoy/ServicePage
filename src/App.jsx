import { useState } from 'react'
import Navbar from '../components/navbar'
import ServiceIMG from '../components/service-bckg'
import MarketingPlan from '../components/marketing-plan'
import Feature1 from '../components/feature1'



function App() {


  return (

    <>
    <Navbar />
    <ServiceIMG style={{marginBottom: '100px'}}/>
    <MarketingPlan />
    <Feature1 />
    </>

  )
}

export default App
