import React from 'react'
import Image from 'next/image'

const LogoImage = ({width=100,height=100}:{width?:number,height?:number}) => {
  return (
    <Image src={"/logo.png"} alt='' width={width} height={height} className='object-contain cursor-pointer'/>
  )
}

export default LogoImage