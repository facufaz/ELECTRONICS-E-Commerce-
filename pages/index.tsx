import type { NextPage } from 'next'

import {Nav} from '../components/Nav'
import Hero from '../components/Hero'
import { Container } from '@mui/material'

const Home: NextPage = () => {
  return (

    <div style={{color:"white",backgroundImage:"url(./assets/home/desktop/image-hero.jpg)", height:"100vh", backgroundSize:"100%",}}>
    <Container sx={{width:"100%"}}>
      <Nav/>
      <hr/>
      <Hero/>
    </Container>
    </div>
  )
}

export default Home
