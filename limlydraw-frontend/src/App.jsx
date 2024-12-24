import { useState,useEffect } from 'react'
import Button from './assets/components/Button'
import Navbar from './assets/components/Navbar'
import './App.css'
import Banner from './assets/components/Banner'
import FeaturesOverview from './assets/components/FeaturesOverview'

function App() {

  return (
    <>
<Navbar/>
<Banner/>
<FeaturesOverview />
    </>
  )
}

export default App
