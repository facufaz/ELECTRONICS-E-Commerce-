import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const ProductCounter = () => {
    const [count, setCount] = useState(0)
  return (
    <Box sx={{backgroundColor:"#afadaf", height:60 , display:'flex', alignItems:"center"  }}>
        <Button onClick={() => {count > 0 && setCount( count - 1)}}>-</Button>
            {count}
        <Button  onClick={() => setCount( count + 1)}>+</Button>
    </Box>
  )
}

export default ProductCounter