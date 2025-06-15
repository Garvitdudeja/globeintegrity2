import Image from 'next/image'
import React from 'react'
import { findAgent } from '../Images'
import Link from 'next/link'

const FindAgent = () => {
  return (
    <div className='bgHomeBanner d-flex'>
        <Image src={findAgent} alt="find agent"/>
        <div>
        <h4 className='darkBlueText'>Find a local insurance <span className='lightBlueText'>agent</span> </h4>
            <Link href="tel:+1 8447874652" className='darkBlueText text-decoration-none'>Call Us: +1 8447874652</Link>
            <br/>   
            <button className='blueButton'>Get a Quote</button>
            </div>    </div>
  )
}

export default FindAgent