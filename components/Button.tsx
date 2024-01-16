import React from 'react'
import MuiButton from '@mui/material/Button';

interface Props {
    color: string;
    variant: "text" | "outlined" | "contained";
}

export const Button = ({variant, color}:Props) => {
  return (
    <div>
        <MuiButton variant={variant} sx={{ background: color}}>See Product</MuiButton>
    </div>
  )
}

