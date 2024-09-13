import React from 'react'
import Banner from '../Components/Banner/Banner'
import Feature from '../Components/Feature/Feature'
import Supercharge from '../Components/Supercharge/Supercharge'
import DownloadApp from '../Components/DownloadApp/DownloadApp'
import Advertise from '../Components/Advertise/Advertise'
import NewProject from '../Components/NewProject/NewProject'
import Explore from '../Components/Explore/Explore'
import MapSec from '../Components/MapSec/MapSec'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Feature/>
      <Supercharge/>    
      <DownloadApp/>
      <NewProject/>
      <Explore/>
      <MapSec/>
      <Advertise/>
    </div>
  )
}

export default Home
