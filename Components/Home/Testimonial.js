import Image from 'next/image'
import React from 'react'
import { whiteStar } from '../Images'
import { FaStar } from "react-icons/fa6";


const TestimonialData = [
  {message: "Getting my indexed universal life policy was a breeze, thanks to my advisor's expertise and personalized approach. They walked me through every step of the process, ensuring I understood all the details. Now, seeing my policy exceed its projections gives me peace of mind and reassurance for the years ahead. ",
    by: "JohnSmith",
  },
    {message: "Getting my indexed universal life policy was a breeze, thanks to my advisor's expertise and personalized approach. They walked me through every step of the process, ensuring I understood all the details. Now, seeing my policy exceed its projections gives me peace of mind and reassurance for the years ahead. ",
    by: "JohnSmith",
  },
    {message: "Getting my indexed universal life policy was a breeze, thanks to my advisor's expertise and personalized approach. They walked me through every step of the process, ensuring I understood all the details. Now, seeing my policy exceed its projections gives me peace of mind and reassurance for the years ahead. ",
    by: "JohnSmith",
  }

]

const stars = [1, 2, 3, 4, 5]
const Testimonial = () => {
  return (
    <>
      <h3 className='text-center'>What our customers are <span className='lightBlueText'>talking about</span></h3>
      <div className='d-flex gap-2 justify-content-center'> {stars.map(item => <Image key={item} src={whiteStar} alt="star" />)}</div>
      <div className="d-flex justify-content-center align-items-center">
        <FaStar className="lightBlueText" />
        <span className="darkBlueText ms-2">Trustpilot</span>
      </div>
      <div className='d-flex gap-2'>{TestimonialData.map((item, index)=>
        <TestimonialCard data={item} key={item.by + index}/>)}</div>
    </>
  )
}


const TestimonialCard = ({data})=>{
  return(<div className='testimonailCard'>
      <div className='d-flex gap-2 justify-content-center'> {stars.map(item => <Image key={item} src={whiteStar} alt="star" />)}</div>
  <p>{data.message}</p>
  <p>{data?.by}</p>

  </div>)
}
export default Testimonial