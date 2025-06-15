import Benifits from "@/Components/Home/Benifits"
import Calculator from "@/Components/Home/Calculator"
import FAQ from "@/Components/Home/FAQ"
import FindAgent from "@/Components/Home/FindAgent"
import HeroBanner from "@/Components/Home/HeroBanner"
import Steps from "@/Components/Home/Steps"
import Testimonial from "@/Components/Home/Testimonial"
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Testimonial />
      <Benifits/>
      <Steps/>
      <Calculator/>
      <FAQ/>
      <FindAgent/>
    </>
  )
}

export default Home