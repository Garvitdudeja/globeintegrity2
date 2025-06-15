import React from 'react'
import { benifit1, benifit2, benifit3 } from '../Images'
import Image from 'next/image'
import Link from 'next/link'


const BenifitData = [{
    image: benifit1,
    heading: "Protect your loved ones",
    description: "Gain peace of mind knowing your family is protected in case the unexpected happens. Amplify combines life insurance and wealth-building into one powerful solution.",
    buttonText: "CALCULATE COVERAGE",
    cta: "#"

},
{
    image: benifit2,
    heading: "Grow your wealth",
    description: "Turn your life insurance policy into a wealth-building tool. With Amplify, enjoy tax-advantaged growth and the flexibility to access your funds for life’s major milestones.ESTIMATE CASH VALUE",
    buttonText: "ESTIMATE CASH VALUE",
    cta: "#"

}, {
    image: benifit3,
    heading: "Simplify the process",
    description: "We’ve made getting coverage easier than ever. With a fully digital application and fast approvals, you can apply in minutes.",
    buttonText: "START APPLICATION",
    cta: "#"

}]

const Benifits = () => {
    return (
        <div className='text-center'><h3 className='darkBlueText'>Bundled Protection and 
        <span className='lightBlueText'>Tax Savings</span></h3>
           <div className='d-flex '>
             {BenifitData.map((item, index) => <BenifitCard key={index + item.buttonText} data={item} />)}
           </div>
        </div>
    )
}


const BenifitCard = ({ data }) => {
    return (
        <div className='text-start'>
            <Image src={data.image} alt={"benifit"} />
            <h1 className='lightBlueText'>{data?.heading.split(" ").slice(0,1)}</h1>
            <h1 className='darkBlueText'>{data?.heading.split(" ").slice(1,).join(" ")}</h1>
            <p className='darkBlueText'>{data?.description}</p>
            <Link href={data?.cta}><button className='lightButton'>{data.buttonText}</button></Link>
        </div>
    )
}

export default Benifits