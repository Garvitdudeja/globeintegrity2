import Image from 'next/image';
import React from 'react'
import { Button } from 'react-bootstrap';
import { FaCirclePlay } from "react-icons/fa6";
import { homeTop } from '../Images';


const HeroBanner = () => {
  return (
    <div className='bgHomeBanner'>
    <div className='d-flex rounded-lg'>
     <div> <h1 className='lightBlueText'><span className='darkBlueText'>Build tax-free wealth.</span> Protect your future.</h1>
      <p>Whether you&apos;re planning for retirement or protecting your family, Globe Integrity gives you the strategy and security to do both in one policy.</p>
      <Button className='blueButton'>See If you Qualify</Button>
      <Button className='btn lightButton rounded-lg '>Watch Video <FaCirclePlay /></Button></div>
      <Image src={homeTop} />
    </div>
    </div>
  )
}

export default HeroBanner;