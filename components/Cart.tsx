import React from 'react'
import { Box, Typography } from '@mui/material'
import {Button} from './Button'
import Image from 'next/image'
import { useAppSelector } from '../store/hooks'

const Cart = () => {
  const { cart } = useAppSelector(state => state.cart)

  return (
    <Box sx={{position:"absolute",top:120, height:"100vh", width:"99vw", backgroundColor:"rgba(0,0,0,0.5)"}}>
        <Box sx={{position:"absolute",top:20, right:400, minHeight:"20vh", width:"25vw", backgroundColor:"white",color:"black", padding:"1.5rem", textTransform:"uppercase", display:"flex", flexDirection:"column" }}>
            <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography>Cart</Typography><Typography>Remove All</Typography></Box>
          
            {cart.map((product) =>{
              return(
                <Box key={product.id} sx={{display:"flex", flexDirection:'column', padding:2 }}>
                    <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", gap:2, margin:0.5}}>
                    <Image  src={product.image} width={50} height={50} alt="headphones"/>
                      <Typography variant='subtitle2'>{product.name}</Typography>
                      <Typography variant='body1'>${product.price}</Typography>
                      <Typography variant='body2'sx={{textTransform:'lowercase'}}>un {product.itemCount}</Typography>
                    </Box>
                    {/* <Typography>{product.price * product.itemCount}</Typography>
                    <Button color='#e47c52' variant='contained' onClick={() => dispatch({type:"REMOVE_FROM_CART", payload:product})}>Remove</Button> */}
                </Box>
              )
            })}
            
            <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography>Total</Typography><Typography>$$$</Typography></Box>
            <Button sx={{ width:"100%", marginTop:"1rem"}} color='#e47c52' variant='contained'>Checkout</Button>
        </Box>
    </Box>
  )
}

export default Cart