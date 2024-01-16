import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
  <div style={{ padding:"2rem 0", display:'flex', justifyContent:"space-between", alignItems:"center"}} > 
    <Image
    src="../assets/shared/logo.svg" 
    alt="Logo" 
    width={120}
    height={25}
    />

    <ul style={{ textTransform:'uppercase', textDecoration:"none", padding:"0"}}>
        <Link style={{marginRight:"2rem", fontWeight:700}} href="/" >Home</Link>
        <Link style={{marginRight:"2rem", fontWeight:700}} href="/" >Headphones</Link>
        <Link style={{marginRight:"2rem", fontWeight:700}} href="/" >Speakers</Link>
        <Link style={{marginRight:"2rem", fontWeight:700}} href="/" >Earphones</Link>
    </ul>

    <Image
        src="./assets/shared/desktop/icon-cart.svg" 
        alt="Cart" 
        width={30}
        height={30}
    />
  </div>
  )
}

export default Nav