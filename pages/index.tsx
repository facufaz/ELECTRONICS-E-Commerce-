import type { NextPage } from 'next'
import {Nav} from '../components/Nav'
import Hero from '../components/Hero'
import {  Container } from '@mui/material'
import CategoryCardContainer from '../components/CategoryCardContainer'
import SpeakerZX9 from '../components/Home/SpeakerZX9'

const Home: NextPage = () => {
 
  return (
    <div>
      <div
       style={{
        color:"white",
        backgroundImage:"url(./assets/home/desktop/image-hero.jpg)",
        height:"100vh",
        backgroundSize:"100%",
        }}>

        <Container>
          <Nav/>
          <hr/>
          <Hero/>
        </Container> 
      </div>
      
      <CategoryCardContainer/>
      <SpeakerZX9/>
     
    </div>
  )
}

export default Home
