import { Box, Button as MuiButton } from '@mui/material'
import React, { useState } from 'react'

const ProductCounter = () => {
    const [count, setCount] = useState(0)
  return (
    <Box sx={{backgroundColor:"#afadaf", height:60 , display:'flex', alignItems:"center"  }}>
        <MuiButton onClick={() => {count > 0 && setCount( count - 1)}}>-</MuiButton>
            {count}
        <MuiButton  onClick={() => setCount( count + 1)}>+</MuiButton>
    </Box>
  )
}

export default ProductCounter