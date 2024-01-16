import React from 'react'
import { Box, Typography } from '@mui/material'
import {Button} from './Button'

const Hero = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"column", height:"50vh", justifyContent:"center", width:"65vh", gap:2}}>
        <Typography variant='h3' sx={{textTransform:'uppercase', color:'#4f4f4f', fontSize:"1.5rem", letterSpacing:"0.5rem"}} >New Product</Typography>
        <Typography variant='h1' sx={{textTransform:'uppercase',fontWeight:700}} >XX99 Mark II Headphones</Typography>
        <Typography variant='body1' sx={{letterSpacing:1}} >Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Typography>
        <Button color="#e47c52" variant="contained"/>
    </Box>
   
  )
}

export default Hero