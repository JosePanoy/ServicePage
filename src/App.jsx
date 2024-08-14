import { useState } from 'react'
import Navbar from '../components/navbar'
import ServiceIMG from '../components/service-bckg'
import MarketingPlan from '../components/marketing-plan'



function App() {


  return (

    <>
    <Navbar />
    <ServiceIMG style={{marginBottom: '100px'}}/>
    <MarketingPlan />
    </>

  )
}

export default App
