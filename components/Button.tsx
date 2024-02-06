import React, { ReactElement, ReactNode } from 'react'
import MuiButton from '@mui/material/Button';

interface Props {
    sx?:any;
    children?: ReactNode | string;
    color: string;
    variant: "text" | "outlined" | "contained";
    onClick?: () => void;
}

export const Button = ({ variant, color, children, sx, onClick }: Props) => {
  return (
    <MuiButton variant={variant} onClick={() => {}} sx={{ background: color, width:"10rem", padding:"0.5rem 1rem", borderRadius:0, ...sx }}>
      {children}
    </MuiButton>
  )
}

