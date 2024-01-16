import type { NextPage } from 'next'
import Image from 'next/image'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <div style={{
      backgroundImage:"url(./assets/home/desktop/image-hero.jpg)",
      height:"100vh",
      backgroundSize:"100%",
      }}>
     <Nav/>
    </div>
  )
}

export default Home
