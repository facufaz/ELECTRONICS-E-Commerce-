import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import {Button} from './Button'
import ProductCounter from './ProductCounter'

const Product = () => {
  return (
    <Container sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Image  src="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg" width={500} height={500} alt="Headphones" />
      
        <Box sx={{display:"flex", flexDirection:"column", height:"75vh", justifyContent:"center", width:"25vw", marginLeft:"8rem"}}>
          <Typography 
            variant='h3'
            sx={{
              textTransform:'uppercase', 
              color:'#e47c52 ',
              fontSize:"1.5rem", 
              letterSpacing:"0.5rem",
              marginBottom:"1rem",
            }}>
          
          New Product</Typography>
            
          <Typography
            variant='h1' 
            sx={{
              textTransform:'uppercase',
              fontWeight:500,
              fontSize:"4.5rem",
              marginBottom:"2rem",
            }}>XX99 Mark II Headphones
          </Typography>

          <Typography variant='body1' sx={{letterSpacing:1, color:"#afadaf", fontSize:"1.25rem", marginBottom:"3rem", fontWeight:"800"}} >Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Typography>
          <Box sx={{display:"flex", gap:4}}>
            <ProductCounter/>
            <Button color="#e47c52" variant="contained">Add To Cart</Button> 
          </Box>

    </Box>
    </Container>
  )
}

export default Product