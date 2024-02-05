import { Box, Typography } from '@mui/material'
import React from 'react'
import {Button} from './Button'

const Cart = () => {
  return (
    <Box sx={{position:"absolute",top:120, height:"100vh", width:"99vw", backgroundColor:"rgba(0,0,0,0.5)"}}>
        <Box sx={{position:"absolute",top:20, right:400, minHeight:"20vh", width:"20vw", backgroundColor:"white",color:"black", padding:"1.5rem", textTransform:"uppercase", display:"flex", flexDirection:"column" }}>
            <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography>Cart</Typography><Typography>Remove All</Typography></Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography>Products</Typography></Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography>Total</Typography><Typography>$$$</Typography></Box>
            <Button sx={{ width:"100%", marginTop:"1rem"}} color='#e47c52' variant='contained'>Checkout</Button>
        </Box>
    </Box>
  )
}

export default Cart