import Image from 'next/image'
import React from 'react'
import { stepsImage } from '../Images'

const StepsData = [{
    heading: "Get an Estimate",
    description: "Get a free, no-obligation estimate and personalized product recommendation",
}, {
    heading: "Easy Application",
    description: "Complete a fast & easy application – our licensed agents are ready to assist.",
}, {
    heading: "Activate Your Policy",
    description: "Once approved, enjoy the peace of mind of protecting your family’s future and growing wealth, all with zero hidden fees.",
},]

const Steps = () => {
    return (
        <div className='bgHomeBanner'>
            <h3 className='darkBlueText text-center'>Done in 3 Easy <span className='lightBlueText'>Steps</span> </h3>
            <div className='d-flex'>
                <Image src={stepsImage} alt="steps" />
                <div>
                    {StepsData.map((item, index)=><div key={item.heading} className='d-flex'>
                        <div className=''>{index + 1}</div>
                        <div><h5>{item.heading}</h5>
                        <p>{item.description}</p></div>
                    </div>)}
                </div>

            </div>
        </div>
    )
}

export default Steps